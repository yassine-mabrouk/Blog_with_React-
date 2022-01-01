import { useState, useEffect } from "react";
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    // use  Effect 
    useEffect(() => {
            fetch(url)
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
                    setLoading(false);
                    setError(err.message);
                })
        }, [url])
        //  [url]) this that mean when we change url load data 
    return { data, loading, error };
}

export default useFetch;