import React from "react";
import {
  MdOutlineUpdate,
  MdPriceChange,
  MdOutlineBusinessCenter,
} from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri"; //Delete icon
import { GrLocation, GrUpdate } from "react-icons/gr"; //Update icon
const TableRow = ({bid}) => {
  const {title, price, deadline, bidderEmail, jobType, status, location} = bid || {};
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
      <td>
      <button disabled={status === "Pending" ? true : false} className={`px-3 py-1 font-bold text-white rounded-md duration-300 ${status === "Pending" ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-900"}`}>
        Complete
      </button>
    </td>
    </tr>
  );
};

export default TableRow;
