import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Products from "../Products/Products";

const JobCategories = () => {
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

        <TabPanel>
          <Products></Products>
        </TabPanel>
        <TabPanel>
          <Products></Products>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobCategories;
