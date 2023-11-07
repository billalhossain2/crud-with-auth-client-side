import React from "react";
import {
  MdOutlineUpdate,
  MdPriceChange,
  MdOutlineBusinessCenter,
} from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri"; //Delete icon
import { GrLocation, GrUpdate } from "react-icons/gr"; //Update icon
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../client/queryClient";
import changeStatusApi from "../../api/changeStatusApi";
import { toast } from "react-toastify";
const RequestTableRow = ({ request }) => {
  console.log(request);
  const {
    _id,
    bidderEmail,
    deadline,
    jobType,
    location,
    price,
    status,
    title,
  } = request || {};

  //Change status mutation
  const changeStatusMutation = useMutation({
    mutationFn: changeStatusApi,
    onSuccess: () => {
      //invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["CatergoryJobs"] });
    },
  });
  const handleAccepted = async (status) => {
    try {
      const result = await changeStatusMutation.mutateAsync({
        text: status,
        id: _id,
      });
      toast.success("Status changed successfully", { autoClose: 1000 });
    } catch (error) {
      toast.error(error.message, { autoClose: 1000 });
    }
  };

  const handleRejected = async (status) => {
    try {
      const result = await changeStatusMutation.mutateAsync({
        text: status,
        id: _id,
      });
      toast.success("Status changed successfully", { autoClose: 1000 });
    } catch (error) {
      toast.error(error.message, { autoClose: 1000 });
    }
  };
  return (
    <tr>
      <td>
        <span className="font-bold text-gray-600">{title}</span>
        <p className="flex items-center gap-1 text-gray-500">
          <HiOutlineLocationMarker className="text-2xl text-gray-500"></HiOutlineLocationMarker>
          <span>{location}</span>
        </p>
        <p className="flex items-center gap-1 text-gray-500">
          <MdOutlineBusinessCenter className="text-2xl text-gray-500"></MdOutlineBusinessCenter>
          <span>{jobType}</span>
        </p>
      </td>
      <td>{bidderEmail}</td>
      <td>{deadline}</td>
      <td>{status}</td>
      <td>${price}</td>
      {status === "pending" ? (
        <td>
          <button
            onClick={() => {
              handleAccepted("Accepted");
            }}
            className="bg-[#3b4edb] hover:bg-[#394497] px-3 py-1 font-bold text-white rounded-md me-2"
          >
            Accept
          </button>
          <button
            onClick={() => {
              handleRejected("Rejected");
            }}
            className="bg-red-500 hover:bg-red-700 px-3 py-1 font-bold text-white rounded-md"
          >
            Reject
          </button>
        </td>
      )
      :
      (
        <td>
          <p className="font-bold text-green-600">in progress</p>
        </td>
      )
    }
    </tr>
  );
};

export default RequestTableRow;
