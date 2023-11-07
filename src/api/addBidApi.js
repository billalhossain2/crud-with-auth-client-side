import useAxiosInstance from '../hooks/useAxiosInstance';

const addBidApi = async(newBid) => {
    const axiosInstance = useAxiosInstance();
    const response = await axiosInstance.post("/addBid", newBid);
    return response.data;
}

export default addBidApi