import React from "react";
import useTitle from "../../hooks/useTitle";
import TableRow from "./TableRow";
import { useContext } from "react";
import { userContext } from "../../contexts/AuthContextProvider";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

const Bids = () => {

  useTitle("JobFusion | My Bids");

  const { user } = useContext(userContext);
  const [sortText, setSortText] = useState("");

  const sortChangeHandler = e=>{
    setSortText(e.target.value)
  }

  const [loading, error, bids] = useFetch(`/bids?email=${user?.email}&sortTxt=${sortText}`)

  if(loading){
    return <Spinner></Spinner>
  }

  if(error){
    return <Error>{error}</Error>
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
