import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Products from "../Products/Products";
import { useQuery } from "@tanstack/react-query";
import getCategoryJobsApi from "../../../api/getCategoryJobsApi";
import getFilteredJobs from "../../../utils/getFilteredJobs";
import Spinner from "../../../components/Spinner";
import Error from "../../../components/Error";

const JobCategories = () => {
  const {isLoading, isError, error, data:jobs} = useQuery({
    queryKey:["CatergoryJobs"],
    queryFn:getCategoryJobsApi,
    retry:3,
  })
  //Categories jobs
  const categoryJobs = getFilteredJobs(jobs);

  return (
    <div className="mb-32">
      <h3 className="text-3xl font-bold text-gray-600 my-5 text-center">
        Popular Job Categories
      </h3>

      {/* Tabs  */}
      <Tabs>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Graphic Design</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Sales & Marketing</Tab>
          <Tab>Writting & Translation</Tab>
          <Tab>Education & Training</Tab>
        </TabList>
        {isError && <Error error={error}></Error>}
        {isLoading && <Spinner></Spinner>}

        {categoryJobs?.map((category, index) => (
          <TabPanel key={index}>
            <Products category={category}></Products>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default JobCategories;
