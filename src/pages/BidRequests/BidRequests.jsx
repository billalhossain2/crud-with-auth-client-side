import React from 'react'
import useTitle from '../../hooks/useTitle'
import RequestTableRow from './RequestTableRow'

const BidRequests = () => {
  useTitle("JobFusion | Bid Requests")
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
        <th>Price</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        <RequestTableRow></RequestTableRow>
    </tbody>
  </table>
</div>
  )
}

export default BidRequests