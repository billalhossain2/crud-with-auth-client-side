import React from "react";
import useTitle from "../../hooks/useTitle";
import TableRow from "./TableRow";
import { useQuery } from "@tanstack/react-query";
import getBidsByEmail from "../../api/getBidsByEmail";
import { useContext } from "react";
import { userContext } from "../../contexts/AuthContextProvider";
import Spinner from "../../components/Spinner";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import Error from "../../components/Error";

const Bids = () => {
  useTitle("JobFusion | My Bids");
  const { user } = useContext(userContext);
  const axiosInstance = useAxiosInstance()
  const [bids, setBids] = useState([]);
  const [sortText, setSortText] = useState("ascending");
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  
  const sortChangeHandler = e=>{
    setSortText(e.target.value)
  }


  useEffect(()=>{
    axiosInstance.get(`/bids?email=${user?.email}&sortTxt=${sortText}`)
    .then(response => {
      setBids(response.data)
      setIsLoading(false)
      setIsError(false)
    })
    .catch(error => {
      console.log(error.message)
      setIsLoading(false)
      setIsError(error.message)
    })
  }, [sortText])

  if(isLoading){
    return <Spinner></Spinner>
  }

  if(isError){
    return <Error></Error>
  }

  return (
    <div className="overflow-x-auto my-10">
      <h3 className="text-center font-bold text-3xl mb-10">My Bids</h3>
      <div className="flex justify-end items-center border-solid border-gray-300 border-[1px] mb-5">
        <p className="text-blue-500 font-bold me-2">Sort By:</p>
        <select onChange={sortChangeHandler} className="select border-none outline-none">
          <option selected value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Email</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bids?.map((bid) => (
            <TableRow key={bid._id} bid={bid}></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bids;
