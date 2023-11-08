import React from 'react'
import useTitle from '../../hooks/useTitle'
import PostedJobCard from './PostedJobCard'
import { useQuery } from '@tanstack/react-query'
import getJobsByEmail from '../../api/getJobsByEmail'
import { useContext } from 'react'
import { userContext } from '../../contexts/AuthContextProvider'
import Spinner from '../../components/Spinner'
import Error from '../../components/Error'

const PostedJobs = () => {
  useTitle("JobFusion | Posted Jobs")
  const {user} = useContext(userContext)
  const {isLoading, isError, error, data:jobs} = useQuery({
    queryKey:["CatergoryJobs"],
    queryFn:()=>getJobsByEmail(user?.email)
  })

  if(isError){
    return <Error></Error>
  }

  if(isLoading){
    return <Spinner></Spinner>
  }
  return (
    <div className='mb-32'>
      <h3 className='text-3xl font-bold text-center text-gray-700 my-10'>My Posted Jobs</h3>
    <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5'>
      {
        jobs?.map(jobItem => <PostedJobCard key={jobItem._id} jobItem={jobItem}></PostedJobCard>)
      }
    </div>
    </div>
  )
}

export default PostedJobs