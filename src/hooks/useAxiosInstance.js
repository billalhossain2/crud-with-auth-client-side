import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000',
    withCredentials:true,
  });


const useAxiosInstance = () => {
  //Add a response interceptor
  return axiosInstance;
}

export default useAxiosInstance