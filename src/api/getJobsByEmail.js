import useAxiosInstance from '../hooks/useAxiosInstance';

const getJobsByEmail = async(email) => {
    const axiosInstance = useAxiosInstance();
    const response = await axiosInstance.get(`/getJobsByEmail/${email}`);
    return response.data;
}

export default getJobsByEmail