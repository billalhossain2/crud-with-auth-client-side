import useAxiosInstance from '../hooks/useAxiosInstance';

const updateJobApi = async({id, newJob}) => {
    const axiosInstance = useAxiosInstance();
    const response = await axiosInstance.put(`/updateJob/${id}`, newJob);
    return response.data;
}

export default updateJobApi