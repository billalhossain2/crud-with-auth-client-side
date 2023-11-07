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

const Bids = () => {
  useTitle("JobFusion | My Bids");
  const { user } = useContext(userContext);
  const axiosInstance = useAxiosInstance()
  const [bids, setBids] = useState([]);
  const [sortText, setSortText] = useState("ascending");
  
  const sortChangeHandler = e=>{
    setSortText(e.target.value)
  }

  // const {
  //   isLoading,
  //   isError,
  //   error,
  //   data: bids,
  // } = useQuery({
  //   queryKey: ["CatergoryJobs"],
  //   queryFn: () => getBidsByEmail(user?.email),
  //   cacheTime: 1000 * 60 * 60 * 24,
  //   retry: 3,
  // });

  // if (isLoading) {
  //   return <Spinner></Spinner>;
  // } else {
  // }


  useEffect(()=>{
    axiosInstance.get(`/bids?email=${user?.email}&sortTxt=${sortText}`)
    .then(response => {
      setBids(response.data)
    })
    .catch(error => console.log(error.message))
  }, [sortText])

  return (
    <div className="overflow-x-auto my-10">
      <h3 className="text-center font-bold text-3xl mb-10">My Bids</h3>
      <div className="flex justify-end items-center border-solid border-gray-300 border-[1px] mb-5">
        <p className="text-blue-500 font-bold">Sort By:</p>
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
