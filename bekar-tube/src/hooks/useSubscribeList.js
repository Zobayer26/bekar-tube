import { useEffect, useState } from "react";
import getSubscriberList from "../api/getSubscriber";

const useSubscribeList = (user) => {
    const [subscribe, setSubsCribe] = useState([]);
    
    useEffect(() => {

        const fetchData = async () => {
            try {
                if (!user) {
                    setSubsCribe([])
                    return;
                }
                const data = await getSubscriberList();
                setSubsCribe(data);
            } catch (error) {
                console.log(error)
                return null
            }
        };

        fetchData();

    }, [user]);

    return subscribe;
};

export default useSubscribeList;
