import { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import getCatagory from "../api/getCatagory";
import getData from "../api/getData";
const useContentData = () => {

  const [categoryList, setCategoryList] = useState([
    {
      id: "0",
      title: "All"
    }
  ])
  const [content, setContent] = useState([
    {
      id: "1",
      thumbnail: null,
      title: "Don't WASTE Your Time.. Learn to Code the RIGHT Way!",
      channel_icon: FaCircleUser,
      channel_name: "Web Developete",
      views: "1.2M views",
      create_date: "2 years ago",
    },
  ]);
  const [loading, setLoading] = useState({
    status: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchData = async (serchTearm) => {
    console.log(serchTearm)
    try {
      setLoading((prev) => ({
        ...prev,
        status: true,
        message: "Content loading, please wait...",
      }));

      const data = await getData(serchTearm);
      if (data) {
        const mappedData = data.map((item) => ({
          id: item.id.videoId,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
          title: item.snippet.title,
          channel_icon: FaCircleUser,
          channel_name: item.snippet.channelTitle,
          views: "0",
          create_date: item.snippet.publishTime,
        }));

        setContent(mappedData);
        console.log("check data", content)
      }
    } catch (err) {
      setError(err);
      console.log(error)
    } finally {
      setLoading((prev) => ({
        ...prev,
        status: false,
        message: "",
      }));
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const result = await getCatagory()

        const value = result.map((item) => (
          {
            id: item.id,
            title: item.snippet.title
          }
        ))
        //this will also  update but  a warnnig 
        // setCategoryList([
        //   ...categoryList,
        //   ...value
        // ])

        //functional updater version is the safer, recommended way ,prevents stale state bugs

        setCategoryList((prev) => [
          ...prev,
          ...value
        ])

      } catch (error) {
        console.log(error)
      }
    }

    fetchCategory();
  }, [])

  return { content, error, loading, categoryList, fetchData };
};

export default useContentData;
