import useAxiosInstance from '../hooks/useAxiosInstance';

const getBidsByEmail = async(email) => {
    const axiosInstance = useAxiosInstance();
    const response = await axiosInstance.get(`/bids/${email}`);
    return response.data;
}

export default getBidsByEmail