import React from 'react'
import useTitle from '../../hooks/useTitle'
import { useContext } from 'react'
import { userContext } from '../../contexts/AuthContextProvider'

const User = () => {
  useTitle("JobFusion | User Profile")
  const {user} = useContext(userContext)
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="p-8 border-solid border-[1px] border-gray-400 rounded-lg shadow-md max-w-md">
      <div className="text-center space-y-3">
        <img
          src={user?.photoURL}
          alt="Profile Image"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h1 className="text-2xl font-semibold mt-4">{user?.displayName}</h1>
        <p className="text-gray-600 font-bold">{user?.email}</p>
        <p className="text-gray-600">Web Developer</p>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">About Me</h2>
        <p className="text-gray-600">
        I'm a passionate web developer with a love for coding and problem-solving. With over 5 years of experience in web development, I specialize in front-end technologies and building user-friendly interfaces. My goal is to create elegant, efficient, and responsive web applications that enhance the user experience. When I'm not coding, you can find me exploring the latest tech trends or hiking in the great outdoors.
        </p>
      </div>

      {/* Add more profile information as needed */}
    </div>
  </div>
  )
}

export default User