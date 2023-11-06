import useAxiosInstance from "../hooks/useAxiosInstance";

const addJobApi = async(newJob) => {
   const axiosInstance = useAxiosInstance();
   const response = await axiosInstance.post("/addJob", newJob);
   return response.data;
}

export default addJobApi