import React, { useState } from 'react'
import useTitle from '../../hooks/useTitle'
import DatePicker from "react-datepicker";
const deatils = {
  "Job title": "Technical Writer",
  "Deadline": "2023-11-26",
  "Description": "Create technical documentation and manuals for software and products.",
  "Category": "Writing & Translation",
  "Minimum price": 35000,
  "Maximum price": 55000,
  "location":"dhaka",
  "Job Type" : "Remote"
}
const JobDetails = () => {
  useTitle("JobFusion | Job Details")
  const [price, setPrice] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [email, setEmail] = useState('bidder@gmail.com');
  const [buyerEmail, setBuyerEmail] = useState('buyer@gmail.com');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!price || !deadline || !email || !buyerEmail) {
      alert('All fields are required');
      return;
    }

    // Add your form submission logic here
    // You can access the input values in `price`, `deadline`, `email`, and `buyerEmail`
    console.log(price, deadline, email, buyerEmail)
  };
  return (
    <div className='my-10'>
       <div>
        <h3><span className='font-bold'>Job Title:</span> <span>Technical Writer</span> </h3>
        <p><span className='font-bold'>Deadline:</span> <span>2023-11-26</span></p>
        <p><span className='font-bold'>Category:</span> <span>Writing & Translation</span></p>
        <p><span className='font-bold'>Salary Range:</span> <span>$35000 - $55000</span></p>
        <p><span className='font-bold'>Location:</span> <span>USA</span></p>
        <p><span className='font-bold'>Job Type::</span> <span>Remote</span> </p>
        <h3 className='font-bold text-2xl mt-5'>Job Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem debitis dignissimos quis! Dignissimos eum est voluptas ratione, voluptate voluptatum laborum nam consectetur, et sit praesentium aliquid beatae, eaque consequatur. Velit reiciendis quasi repellat cupiditate. Fuga id maxime voluptas culpa alias, est cum distinctio quasi nobis asperiores atque enim consequuntur eligendi?</p>
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
          type="date"
          id="deadline"
          name="deadline"
          selected={deadline}
          required
          readOnly
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
          required
          readOnly
          className="border-[1px] border-solid border-gray-300 rounded-md px-5 py-3"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="buyerEmail">Buyer Email</label>
        <input
          type="email"
          id="buyerEmail"
          name="buyerEmail"
          value={buyerEmail}
          readOnly
          required
          className="border-[1px] border-solid border-gray-300 rounded-md px-5 py-3"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Bid on the project
      </button>
    </form>
       </div>
    </div>
  )
}

export default JobDetails