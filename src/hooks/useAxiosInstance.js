import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000',
    withCredentials:true,
  });


const useAxiosInstance = () => {
  return axiosInstance;
}

export default useAxiosInstance