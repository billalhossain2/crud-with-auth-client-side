import React, { useState } from 'react'
import useTitle from '../../hooks/useTitle'
import DatePicker from "react-datepicker";
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import getJobById from '../../api/getJobById';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import { useContext } from 'react';
import { userContext } from '../../contexts/AuthContextProvider';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import useAxiosInstance from '../../hooks/useAxiosInstance';

const JobDetails = () => {
  useTitle("JobFusion | Job Details")
  const {user} = useContext(userContext);
  const axiosInstance = useAxiosInstance()
  const {jobId} = useParams();

  //get job using tanstack query
  const {isLoading, isError, error, data} = useQuery({
    queryKey:["CatergoryJobs"],
    queryFn:()=>getJobById(jobId)
  })
  const {_id, jobTitle, Category, Deadline:date, Description, email:buyerMail, jobType, location, maximumPrice, minimumPrice} = data ? data[0] : {};


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!price || !deadline || !email || !buyerMail) {
      return toast.error("All fields are requred!", {autoClose:1000})
    }

    // Add your form submission logic here
    // You can access the input values in `price`, `deadline`, `email`, and `buyerMail`
    console.log(price, deadline, email, buyerMail)
  };

  const [price, setPrice] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [email, setEmail] = useState('');

      //Check user role
    const isOwner = user?.email === buyerMail;
    console.log("Matching....", isOwner)

   


  if(isError){
    return <Error error={error}></Error>
  }

  if(isLoading){
    return <Spinner></Spinner>
  }


  return (
    <div className='my-10'>
       <div>
        <h3><span className='font-bold'>Job Title:</span> <span>{jobTitle}</span> </h3>
        <p><span className='font-bold'>Deadline:</span> <span>{date}</span></p>
        <p><span className='font-bold'>Category:</span> <span>{Category}</span></p>
        <p><span className='font-bold'>Salary Range:</span> <span>${minimumPrice} - ${maximumPrice}</span></p>
        <p><span className='font-bold'>Location:</span> <span>{location}</span></p>
        <p><span className='font-bold'>Job Type::</span> <span>{jobType}</span> </p>
        <h3 className='font-bold text-2xl mt-5'>Job Description</h3>
        <p>{Description}</p>
       </div>

       {/* Place Bid Form  */}
       <div>
        <h3 className='font-bold text-2xl mt-10'>Place Your Bid Form</h3>
       <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          placeholder='Enter your bid amount $'
          className="border-[1px] border-solid border-gray-300 rounded-md px-5 py-3"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="deadline">Deadline</label>
        <DatePicker
          selected={deadline}
          onChange={(date) => setDeadline(date)}
          required
          className="border-[1px] border-solid border-gray-300 rounded-md px-5 py-3"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder='Your email'
          required
          className="border-[1px] border-solid border-gray-300 rounded-md px-5 py-3"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="buyerMail">Buyer Email</label>
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

      <button type="submit" disabled={isOwner ? true : false} className={`text-white py-2 px-4 rounded ${isOwner ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'}`}>
        Bid on the project
      </button>
    </form>
       </div>
    </div>
  )
}

export default JobDetails