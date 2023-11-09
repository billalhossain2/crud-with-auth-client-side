import { motion } from "framer-motion";
import {
  MdOutlineUpdate,
  MdPriceChange,
  MdOutlineBusinessCenter,
} from "react-icons/md";
import {HiOutlineLocationMarker} from "react-icons/hi"
import {RiDeleteBin6Line} from "react-icons/ri"//Delete icon
import { GrLocation, GrUpdate } from "react-icons/gr";//Update icon
import { FiEdit } from "react-icons/fi";//Update icon
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../client/queryClient";
import deleteJobApi from "../../api/deleteJobApi";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const PostedJobCard = ({jobItem}) => {
  const {_id, Category, Deadline, Description, email, jobTitle, jobType, location, maximumPrice, minimumPrice} = jobItem || {};
  const variants = {
    normal: { opacity: 1, scale: 1, x: 0, y: 0 },
    hover: { opacity: 1, scale: 1, x: 0, y: -7 },
  };

  //delelete job mutation
  const deleteJobMutation = useMutation({
    mutationFn:deleteJobApi,
    onSuccess:()=>{
      //invalidate and refetch
      queryClient.invalidateQueries({queryKey:["CatergoryJobs"]})
    }
  })
  const handleDelete = (jobId)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          try {
            const result = await deleteJobMutation.mutateAsync(jobId);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          } catch (error) {
            toast.error(error.message, {autoClose:1000})
          }
        }
      });
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover="hover"
      variants={variants}
    >
      <div className="border-solid border-[1px] border-blue-200 p-3 hover:border-blue-500 rounded-lg space-y-3 h-[350px] flex flex-col justify-between">
        <h3 className="font-bold text-xl text-gray-700">
          {jobTitle}
        </h3>
        <p className="flex items-center gap-1 text-gray-500">
          {" "}
          <MdOutlineUpdate className="text-2xl"></MdOutlineUpdate>{" "}
          <span>{Deadline}</span>
        </p>
        <p className="flex items-center gap-1 text-gray-500">
          <MdPriceChange className="text-2xl"></MdPriceChange>{" "}
          <span>${minimumPrice} - ${maximumPrice}</span>
        </p>

        <p className="flex items-center gap-1 text-gray-500">
          <HiOutlineLocationMarker className="text-2xl text-gray-500"></HiOutlineLocationMarker>
          <span>{location}</span>
        </p>
        <p className="flex items-center gap-1 text-gray-500">
          <MdOutlineBusinessCenter className="text-2xl text-gray-500"></MdOutlineBusinessCenter>
          <span>{jobType}</span>
        </p>
        <p className="text-gray-500">
          {Description}
        </p>

        <div className="flex gap-3 mt-5">
          <Link to={`/update-job/${_id}`}>
          <button className="border-solid border-[1px] border-blue-500 text-blue-700 hover:bg-blue-700 hover:text-white duration-300 px-5 py-2 font-bold rounded-lg">
            <FiEdit className="font-bold text-2xl"></FiEdit>
          </button>
          </Link>
          <button onClick={()=>handleDelete(_id)} className="border-solid border-[1px] border-red-500 text-red-700 hover:bg-red-700 hover:text-white duration-300 px-5 py-2 font-bold rounded-lg">
            <RiDeleteBin6Line className="text-2xl"></RiDeleteBin6Line>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PostedJobCard;
