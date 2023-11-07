import useAxiosInstance from '../hooks/useAxiosInstance';

const getBidsByBuyerEmail = async(buyerEmail) => {
    const axiosInstance = useAxiosInstance();
    const response = await axiosInstance.get(`/bidRequests/${buyerEmail}`);
    return response.data;
}

export default getBidsByBuyerEmail