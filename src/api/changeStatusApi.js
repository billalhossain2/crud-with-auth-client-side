import useAxiosInstance from '../hooks/useAxiosInstance';

const changeStatusApi = async(status) => {
    const axiosInstance = useAxiosInstance();
    const response = await axiosInstance.patch(`/bidStatus/${status.id}`, {status:status.text});
    return response.data;
}

export default changeStatusApi