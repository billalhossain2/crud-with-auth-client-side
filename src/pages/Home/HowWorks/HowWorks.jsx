import React from "react";
import WorkItem from "./WorkItem";

const HowWorks = () => {
  const works = [
    {
      id: "1aBcD2eF3gH4iJ5kL6",
      icon: "https://i.ibb.co/fYkj6H8/account.png",
      title: "Create an Account",
      description:
        "Start your journey by creating a personalized account. It's quick and easy, and it's the first step to connecting with opportunities or finding the perfect expert for your tasks.",
    },
    {
      id: "2xYz3A4bC5dE6fG7",
      icon: "https://i.ibb.co/9nPzX5B/task.png",
      title: "Post a Task",
      description:
        "Have a job that needs to be done? Share the details of your task with our community. Posting a task is the key to getting things done efficiently and effectively.",
    },
    {
      id: "3H4iJ5kL6mN7oP8qR9",
      icon: "https://i.ibb.co/MGwpdqX/expert.png",
      title: "Choose an Expert",
      description:
        "Browse through a diverse pool of experts who are ready to assist you with your tasks. Find the right match for your project and get it done with confidence.",
    },
  ];

  return (
    <div className="mb-32">
        <h3 className="text-center text-3xl my-10 font-bold text-gray-700">How It Works?</h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      {works?.map((work) => (
        <WorkItem key={work.id} work={work}></WorkItem>
      ))}
    </div>
    </div>
  );
};

export default HowWorks;
