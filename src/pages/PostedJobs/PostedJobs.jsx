import React from 'react'
import useTitle from '../../hooks/useTitle'
import PostedJobCard from './PostedJobCard'

const PostedJobs = () => {
  useTitle("JobFusion | Posted Jobs")
  return (
    <div className='mb-32'>
      <h3 className='text-3xl font-bold text-center text-gray-700 my-5'>My Posted Jobs</h3>
    <div className='grid md:grid-cols-3  grid-cols-1 gap-5'>
      <PostedJobCard></PostedJobCard>
      <PostedJobCard></PostedJobCard>
      <PostedJobCard></PostedJobCard>
      <PostedJobCard></PostedJobCard>
      <PostedJobCard></PostedJobCard>
      <PostedJobCard></PostedJobCard>
      <PostedJobCard></PostedJobCard>
    </div>
    </div>
  )
}

export default PostedJobs