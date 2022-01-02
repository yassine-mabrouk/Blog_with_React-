import { useState, useEffect } from "react";
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    // use  Effect 
    useEffect(() => {
            const abortCont = new AbortController();
            fetch(url, {signal: abortCont.signal})
                .then((response) => {
                    console.log(response);
                    if (!response.ok) {
                        throw Error("Error Cannot get data !!!");
                    }
                    return response.json();
                }).then((data) => {
                    setData(data)
                    setLoading(false);

                    setError(null);
                })
                .catch((err) => {
                    console.log(err.message);
                    if (err.name ==="AbortError"){
                        console.log("fetch aborted ");
                    } else {
                           setLoading(false);
                    setError(err.message);  
                    }
               
                });
                return ()=> abortCont.abort();
        }, [url])
        //  [url]) this that mean when we change url load data 
    return { data, loading, error };
}

export default useFetch;