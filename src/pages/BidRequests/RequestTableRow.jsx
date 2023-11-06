import React from 'react'
import {
  MdOutlineUpdate,
  MdPriceChange,
  MdOutlineBusinessCenter,
} from "react-icons/md";
import {HiOutlineLocationMarker} from "react-icons/hi"
import {RiDeleteBin6Line} from "react-icons/ri"//Delete icon
import { GrLocation, GrUpdate } from "react-icons/gr";//Update icon
const RequestTableRow = () => {
  return (
    <tr>
        <td>
          <span className='font-bold text-gray-600'>Frontend Webdeveloper</span>
          <p className="flex items-center gap-1 text-gray-500">
          <HiOutlineLocationMarker className="text-2xl text-gray-500"></HiOutlineLocationMarker>
          <span>Gazipur, Dhaka</span>
        </p>
        <p className="flex items-center gap-1 text-gray-500">
          <MdOutlineBusinessCenter className="text-2xl text-gray-500"></MdOutlineBusinessCenter>
          <span>Remote</span>
        </p>
          </td>
        <td>example@gmail.com</td>
        <td>06/11/2023</td>
        <td>Pending</td>
        <td>$1500 - $2000</td>
        <td>
            <button className='bg-[#3b4edb] hover:bg-[#394497] px-3 py-1 font-bold text-white rounded-md me-2'>Accept</button>
            <button className='bg-red-500 hover:bg-red-700 px-3 py-1 font-bold text-white rounded-md'>Reject</button>
        </td>
      </tr>
  )
}

export default RequestTableRow