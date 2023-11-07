import React from 'react'
import useTitle from '../../hooks/useTitle'
import TableRow from './TableRow'
import { useQuery } from '@tanstack/react-query'
import getBidsByEmail from '../../api/getBidsByEmail'
import { useContext } from 'react'
import { userContext } from '../../contexts/AuthContextProvider'
import Spinner from '../../components/Spinner'
import { useState } from 'react'
import { useEffect } from 'react'

const Bids = () => {
  useTitle("JobFusion | My Bids")
  const {user} = useContext(userContext)
  const {isLoading, isError, error, data:bids} = useQuery({
    queryKey:["CatergoryJobs"],
    queryFn:()=>getBidsByEmail(user?.email),
    cacheTime: 1000 * 60 * 60 * 24,
    retry:3
  })

  if(isLoading){
    return <Spinner></Spinner>
  }else{
  }


  return (
  <div className="overflow-x-auto my-10">
    <h3 className='text-center font-bold text-3xl mb-10'>My Bids</h3>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Job Title</th>
        <th>Email</th>
        <th>Deadline</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        bids?.map(bid => <TableRow key={bid._id} bid={bid}></TableRow>)
      }
    </tbody>
  </table>
</div>
  )
}

export default Bids