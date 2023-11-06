import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function UpdateJob() {
  const [jobTitle, setJobTitle] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");

  const [jobTitleError, setJobTitleError] = useState("");
  const [deadlineError, setDeadlineError] = useState("");
  const [minPriceError, setMinPriceError] = useState("");
  const [maxPriceError, setMaxPriceError] = useState("");

  const [descriptionError, setDescriptionError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [jobTypeError, setJobTypeError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  // Add similar state and error variables for other fields

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Field validation
    setJobTitleError("");
    setDeadlineError("");
    setMinPriceError("");
    setMaxPriceError("");
    setDescriptionError("");
    setLocationError("");
    setJobTypeError("");
    setCategoryError("");

    let isValid = true;

    if (!jobTitle) {
      setJobTitleError("Job title is required");
      isValid = false;
    }

    if (!description) {
      setDescriptionError("Description is required");
      isValid = false;
    }

    if (deadline.getTime() < new Date().getTime()) {
      setDeadlineError("Valid date is required");
      isValid = false;
    }

    if (!minPrice) {
      setMinPriceError("Minimum price is required");
      isValid = false;
    }

    if (!maxPrice) {
      setMaxPriceError("Maximum price is required");
      isValid = false;
    } else if (Number(minPrice) > Number(maxPrice)) {
      setMaxPriceError("Maximum price should be greater than minimum price");
      isValid = false;
    }

    if (!location) {
      setLocationError("Location is required");
      isValid = false;
    }

    if(!jobType){
      setJobTypeError('Job Type is required')
      isValid = false;
    }

    if(!category){
      setCategoryError('Category is required');
      isValid = false;
    }


    if (isValid) {
      // Submit the job data to your API or database
      console.log("Job data:", {
        jobTitle,
        deadline,
        description,
        category,
        minPrice,
        maxPrice,
        jobType,
        location,
      });
    }

    //reset the form fields
  };

  return (
    <div className="bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Update Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-gray-600">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            className={`w-full p-2 border ${
              jobTitleError ? "border-red-500" : "border-gray-300"
            }`}
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          {jobTitleError && (
            <p className="text-red-500 text-sm">{jobTitleError}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-gray-600">
            Deadline
          </label>
          <DatePicker
            className={`w-full p-2 border ${deadlineError ? 'border-red-500' : 'border-gray-300'}`}
            selected={deadline}
            onChange={(date) => setDeadline(date)}
          />
          {deadlineError && (
            <p className="text-red-500 text-sm">{deadlineError}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className={`w-full p-2 border ${
              descriptionError ? "border-red-500" : "border-gray-300"
            }`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {descriptionError && (
            <p className="text-red-500 text-sm">{descriptionError}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-600">
            Category
          </label>
          <select
            id="category"
            name="category"
            className={`w-full p-2 border ${categoryError ? 'border-red-500' : 'border-gray-300'}`}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Sales & Marketing">Sales & Marketing</option>
            <option value="Writing & Translation">Writing & Translation</option>
            <option value="Education & Training">Education & Training</option>
            <option value="Education & Training">Education & Training</option>
          </select>
          {categoryError && <p className="text-red-500 text-sm">{categoryError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="minPrice" className="block text-gray-600">
            Minimum Price
          </label>
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            className={`w-full p-2 border ${
              minPriceError ? "border-red-500" : "border-gray-300"
            }`}
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          {minPriceError && (
            <p className="text-red-500 text-sm">{minPriceError}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="maxPrice" className="block text-gray-600">
            Maximum Price
          </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            className={`w-full p-2 border ${
              maxPriceError ? "border-red-500" : "border-gray-300"
            }`}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          {maxPriceError && (
            <p className="text-red-500 text-sm">{maxPriceError}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="jobType" className="block text-gray-600">
            Job Type
          </label>
          <select
            id="job-type"
            name="jobType"
            className={`w-full p-2 border ${jobTypeError ? 'border-red-500' : 'border-gray-300'}`}
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">Select Job Type</option>
            <option value="Remote">Remote</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
            <option value="On-Site">On-Site</option>
            <option value="Contract">Contract</option>
          </select>
          {jobTypeError && <p className="text-red-500 text-sm">{jobTypeError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-600">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className={`w-full p-2 border ${
              locationError ? "border-red-500" : "border-gray-300"
            }`}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {locationError && (
            <p className="text-red-500 text-sm">{locationError}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateJob;