import { motion } from "framer-motion";
import { MdOutlineUpdate, MdPriceChange } from "react-icons/md";
const ProductCard = () => {
  const variants = {
    normal: { opacity: 1, scale: 1, x: 0, y: 0 },
    hover: { opacity: 1, scale: 1, x: 0, y: -7 },
  };
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover='hover'
    variants={variants}
    >
      <div className="border-solid border-[1px] border-gray-300 p-3 rounded-lg space-y-3">
        <h3 className="font-bold text-xl text-gray-700">
          Frontend Webdeveloper
        </h3>
        <p className="flex items-center gap-1 text-gray-500">
          {" "}
          <MdOutlineUpdate className="text-2xl"></MdOutlineUpdate>{" "}
          <span>11/05/2023</span>
        </p>
        <p className="flex items-center gap-1 text-gray-500">
          <MdPriceChange className="text-2xl"></MdPriceChange>{" "}
          <span>$1500 - $1700</span>
        </p>
        <p className="text-gray-500">
          Design intuitive and visually appealing user interfaces for websites
          and apps.
        </p>
        <button className="bg-[#3b4edb] hover:bg-[#202758] duration-500 px-5 py-2 text-white font-bold rounded-lg">
          Bid Now
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
