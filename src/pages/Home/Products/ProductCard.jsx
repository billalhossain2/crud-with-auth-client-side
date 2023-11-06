import { motion } from "framer-motion";
import { MdOutlineUpdate, MdPriceChange } from "react-icons/md";
import { Link } from "react-router-dom";
const ProductCard = ({ jobItem }) => {
  const {
    _id,
    jobTitle,
    Deadline,
    Description,
    minimumPrice,
    maximumPrice,
    jobType,
    location,
  } = jobItem || {};
  const variants = {
    normal: { opacity: 1, scale: 1, x: 0, y: 0 },
    hover: { opacity: 1, scale: 1, x: 0, y: -7 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover="hover"
      variants={variants}
    >
      <div className="border-solid border-[1px] border-gray-300 p-3 rounded-lg space-y-3">
        <h3 className="font-bold text-xl text-gray-700">
          {jobTitle}
        </h3>
        <p className="flex items-center gap-1 text-gray-500">
          {""}
          <MdOutlineUpdate className="text-2xl"></MdOutlineUpdate>{" "}
          <span>{Deadline}</span>
        </p>
        <p className="flex items-center gap-1 text-gray-500">
          <MdPriceChange className="text-2xl"></MdPriceChange>{" "}
          <span>${minimumPrice}</span>
          <span>-</span>
          <span>${maximumPrice}</span>
        </p>
        <p className="text-gray-500">
          {Description}
        </p>
        <Link to={`job-details/${_id}`}>
          <button className="bg-[#3b4edb] hover:bg-[#202758] duration-500 px-5 py-2 text-white font-bold rounded-lg mt-3">
            Bid Now
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
