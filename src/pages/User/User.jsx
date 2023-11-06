import React from 'react'
import useTitle from '../../hooks/useTitle'

const User = () => {
  useTitle("JobFusion | User Profile")
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
      <div className="text-center">
        <img
          src="/path-to-your-profile-image.jpg"
          alt="Profile Image"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h1 className="text-2xl font-semibold mt-4">Md. Billal Hossain</h1>
        <p className="text-gray-600">Web Developer</p>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">About Me</h2>
        <p className="text-gray-600">
        I'm a passionate software engineer with a love for coding and problem-solving. With over 5 years of experience in web development, I specialize in front-end technologies and building user-friendly interfaces. My goal is to create elegant, efficient, and responsive web applications that enhance the user experience. When I'm not coding, you can find me exploring the latest tech trends or hiking in the great outdoors.
        </p>
      </div>

      {/* Add more profile information as needed */}
    </div>
  </div>
  )
}

export default User