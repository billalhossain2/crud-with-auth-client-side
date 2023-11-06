import { motion } from "framer-motion";
import {
  MdOutlineUpdate,
  MdPriceChange,
  MdOutlineBusinessCenter,
} from "react-icons/md";
import {HiOutlineLocationMarker} from "react-icons/hi"
import {RiDeleteBin6Line} from "react-icons/ri"//Delete icon
import { GrLocation, GrUpdate } from "react-icons/gr";//Update icon
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../client/queryClient";
import deleteJobApi from "../../api/deleteJobApi";
import { toast } from "react-toastify";
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
  const handleDelete = async(jobId)=>{
    try {
      const result = await deleteJobMutation.mutateAsync(jobId);
      toast.success("Deleted Job was successful", {autoClose:1000})
    } catch (error) {
      toast.error(error.message, {autoClose:1000})
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover="hover"
      variants={variants}
    >
      <div className="border-solid border-[1px] border-gray-300 p-3 rounded-lg space-y-3 h-[350px] flex flex-col justify-between">
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
          <button className="bg-[#3b4edb] hover:bg-[#202758] duration-500 px-5 py-2 font-bold rounded-lg">
            <GrUpdate className="text-white text-2xl"></GrUpdate>
          </button>
          <button onClick={()=>handleDelete(_id)} className="duration-500 px-5 py-2 text-white font-bold rounded-lg">
            <RiDeleteBin6Line className="text-red-600 text-2xl"></RiDeleteBin6Line>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PostedJobCard;
