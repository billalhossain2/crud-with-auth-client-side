import useAxiosInstance from "../hooks/useAxiosInstance";

const deleteJobApi = async (jobId) => {
  const axiosInstance = useAxiosInstance();
  const response = await axiosInstance.delete(`/deleteJob/${jobId}`);
  return response.data;
};

export default deleteJobApi;
