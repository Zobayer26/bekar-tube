import { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import getData from "../api/getData";
const useContentData = (serchTearm) => {
  const [content, setContent] = useState([
    {
      id: 1,
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

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        setLoading((prev) => ({
          ...prev,
          status: true,
          message: "Content loading, please wait...",
        }));

        const data = await getData(serchTearm);
        if (!ignore && data) {
          const mappedData = data.map((item) => ({
            id: item.id.videoId,
            thumbnail: item.snippet.thumbnails.default.url,
            title: item.snippet.title,
            channel_icon: FaCircleUser,
            channel_name: item.snippet.channelTitle,
            views: "0",
            create_date: item.snippet.publishTime,
          }));

          setContent(mappedData);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading((prev) => ({
          ...prev,
          status: false,
          message: "",
        }));
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [serchTearm]);

  return { content, error, loading };
};

export default useContentData;
