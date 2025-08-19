import { useEffect, useState } from "react";
import getComments from "../api/getComments";

const useComments = (videoId) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const data = await getComments(videoId);
        if (!ignore && data) {
          
          setComments(data);
        }
      } catch (error) {
        console.log(error);
       
      }
    };
    fetchData();

    return () => {
      ignore = true;
    };
  }, [videoId]);

  return comments;
};

export default useComments;
