import React from 'react'
import useTitle from '../../hooks/useTitle'
import TableRow from './TableRow'

const Bids = () => {
  useTitle("JobFusion | My Bids")
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
      <TableRow></TableRow>
      <TableRow></TableRow>
      <TableRow></TableRow>
      <TableRow></TableRow>
    </tbody>
  </table>
</div>
  )
}

export default Bids