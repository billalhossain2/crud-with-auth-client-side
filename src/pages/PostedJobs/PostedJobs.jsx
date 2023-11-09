import React from 'react'
import useTitle from '../../hooks/useTitle'
import PostedJobCard from './PostedJobCard'
import { useContext } from 'react'
import { userContext } from '../../contexts/AuthContextProvider'
import Spinner from '../../components/Spinner'
import Error from '../../components/Error'
import useFetch from '../../hooks/useFetch'

const PostedJobs = () => {
  useTitle("JobFusion | Posted Jobs")
  const {user} = useContext(userContext)

  const [loading, error, jobs] = useFetch(`/getJobsByEmail/${user?.email}`)

  if(error){
    return <Error></Error>
  }

  if(loading){
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