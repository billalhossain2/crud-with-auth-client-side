import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import getJobById from "../../api/getJobById";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { useContext } from "react";
import { userContext } from "../../contexts/AuthContextProvider";
import { toast } from "react-toastify";
import { useEffect } from "react";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import addBidApi from "../../api/addBidApi";
import { queryClient } from "../../client/queryClient";
import {FcExpired} from "react-icons/fc"

const JobDetails = () => {

  useTitle("JobFusion | Job Details");
  const { user } = useContext(userContext);
  const axiosInstance = useAxiosInstance();
  const { jobId } = useParams();
  const navigate = useNavigate();


  const [price, setPrice] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [email, setEmail] = useState("");


  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  //Add bid mutation
  const addBidMutation = useMutation({
    mutationFn: addBidApi,
    onSuccess: () => {
      //invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["CatergoryJobs"] });
    },
  });

  //get job using tanstack query
  // const {isLoading, isError, error, data} = useQuery({
  //   queryKey:["CatergoryJobs"],
  //   queryFn:()=>getJobById(jobId)
  // })


  useEffect(() => {
    axiosInstance
      .get(`/category-jobs/${jobId}`)
      .then((response) => {
        setData(response.data[0]);
        setPrice(response.data[0].minimumPrice)
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [jobId]);




  const {
    _id,
    jobTitle,
    Category,
    Deadline: date,
    Description,
    email: buyerMail,
    jobType,
    location,
    maximumPrice,
    minimumPrice,
  } = data;





  //Check user role
  const isOwner = user?.email === buyerMail;
  let isDateOver = true;
  
  if(date){
    const postedTime = new Date(date).getTime()
    const currentTime = Date.now()
    isDateOver = postedTime > currentTime ? false : true;
  }

  if (error) {
    return <Error error = {error}></Error>;
  }

  if (loading) {
    return <Spinner></Spinner>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!price || !deadline) {
      return toast.error("All fields are requred!", { autoClose: 1000 });
    }

    // Add your form submission logic here
    // You can access the input values in `price`, `deadline`, `email`, and `buyerMail`
    console.log(price, deadline, email, buyerMail);
    const newBid = {
      title: jobTitle,
      price: price,
      deadline: deadline,
      bidderEmail: user?.email,
      buyerEmail: buyerMail,
      location: location,
      jobType: jobType,
      status: "Pending",
    };

    try {
      const result = await addBidMutation.mutateAsync(newBid);
      toast.success("Added a new bid successfully", { autoClose: 1000 });
      navigate("/my-bids");
    } catch (error) {
      toast.error(error.message, { autoClose: 1000 });
    }
  };

  return (
    <div className="my-10">
      <div className="border-solid border-2 hover:border-blue-300 max-w-[300px] p-3 rounded-lg space-y-2 relative">
      {isDateOver && <div className="font-bold text-red-400 ml-2 text-xl absolute top-0 right-0 p-1 flex items-center">
      <FcExpired className="font-bold text-4xl"></FcExpired>
      <span>Expired</span>
        </div>}
        <h3 className="pt-5">
          <span className="font-bold">Job Title:</span> <span>{jobTitle}</span>
        </h3>
        <p>
          <span className="font-bold">Deadline:</span> <span className={isDateOver && 'text-red-600 font-bold'}>{date}</span>
        </p>
        <p>
          <span className="font-bold">Category:</span> <span>{Category}</span>
        </p>
        <p>
          <span className="font-bold">Salary Range:</span>
          <span>
            ${minimumPrice} - ${maximumPrice}
          </span>
        </p>
        <p>
          <span className="font-bold">Location:</span> <span>{location}</span>
        </p>
        <p>
          <span className="font-bold">Job Type::</span> <span>{jobType}</span>
        </p>
        <h3 className="font-bold text-2xl mt-5">Job Description</h3>
        <p>{Description}</p>
      </div>

      {/* Place Bid Form  */}
      <div>
        <h3 className="font-bold text-2xl mt-10">Place Your Bid Form</h3>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="price">Bid Amount $</label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              placeholder="Enter your bid amount $"
              className="border-[1px] border-solid rounded-md px-5 py-3 border-gray-300"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="deadline">Deadline</label>
            <DatePicker
              selected={new Date(date)}
              readOnly
              required
              className="border-[1px] border-solid border-gray-300 rounded-md px-5 py-3"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Your Email (Bidder)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user?.email}
              readOnly
              placeholder="Your email"
              required
              className="border-[1px] border-solid border-gray-300 rounded-md px-5 py-3"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="buyerMail">Buyer Email (Job Owner)</label>
            <input
              type="email"
              id="buyerMail"
              name="buyerMail"
              value={buyerMail}
              readOnly
              required
              className="border-[1px] border-solid border-gray-300 rounded-md px-5 py-3"
            />
          </div>

          <button
            type="submit"
            disabled={(isOwner || isDateOver) ? true : false }
            className={`text-white py-2 px-4 rounded ${
              isOwner || isDateOver ? "bg-red-300" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Bid on the project
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobDetails;
