import { useState } from 'react'
import useAxiosInstance from './useAxiosInstance';
import { useEffect } from 'react';

const useFetch = (url) => {
  const axiosInstance = useAxiosInstance();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 useEffect(()=>{
    axiosInstance.get(url)
    .then(response => {
        const loadedData = response.data;
        setData(loadedData)
        setLoading(false)
        setError("")
    })
    .catch(error=>{
        setError(error.message)
        setLoading(false)
    })
 }, [url])

 return [loading, error, data]
}

export default useFetch