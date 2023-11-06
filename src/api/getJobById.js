import useAxiosInstance from '../hooks/useAxiosInstance';

const getJobById = async(jobId) => {
    const axiosInstance = useAxiosInstance();
    const response = await axiosInstance.get(`/category-jobs/${jobId}`);
    return response.data;
}

export default getJobById