import React from 'react'
import useTitle from '../../hooks/useTitle'
import RequestTableRow from './RequestTableRow'
import { useQuery } from '@tanstack/react-query'
import getBidsByBuyerEmail from '../../api/getBidsByBuyerEmail'
import { useContext } from 'react'
import { userContext } from '../../contexts/AuthContextProvider'
import Spinner from '../../components/Spinner'
import Error from '../../components/Error'

const BidRequests = () => {
  useTitle("JobFusion | Bid Requests")
  const {user} = useContext(userContext)

  //Get all bid requests by job owner email
  const {isLoading, isError, error, data:bidRequests} = useQuery({
    queryKey:["CatergoryJobs"],
    queryFn:()=>getBidsByBuyerEmail(user?.email)
  })
  

  if(isLoading){
    return <Spinner></Spinner>
  }

  if(isError){
    return <Error></Error>
  }
  
  return (
    <div className="overflow-x-auto my-10">
    <h3 className='text-center font-bold text-3xl mb-10'>Bid Requests</h3>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Job Title</th>
        <th>Email (Bidder)</th>
        <th>Deadline</th>
        <th>Status</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
          bidRequests?.map(request => <RequestTableRow key={request._id} request={request}></RequestTableRow>)
        }
    </tbody>
  </table>
</div>
  )
}

export default BidRequests