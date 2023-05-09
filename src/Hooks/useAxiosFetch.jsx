import { useState, useEffect } from "react";
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const res = await axios.get(url, {
                    cancelToken: source.token
                });
                if (isMounted) {
                    setData(res.data);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                    setData([]);
                }
            } finally {
                isMounted && setIsLoading(false);
            }
        }     
        
        fetchData(dataUrl);

        function cleanUp () {
            isMounted = false;
            source.cancel();
        }

        cleanUp;
        
    },[dataUrl])

    return { data,isLoading, error }
}

export default useAxiosFetch;