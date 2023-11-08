import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials:true,
  });


const useAxiosInstance = () => {
  //Add a response interceptor
  return axiosInstance;
}

export default useAxiosInstance