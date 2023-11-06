import useAxiosInstance from "../hooks/useAxiosInstance"

const getCategoryJobsApi = async() => {
   const axiosInstance = useAxiosInstance();
   const response = await axiosInstance.get("/category-jobs");
   return response.data;
}

export default getCategoryJobsApi