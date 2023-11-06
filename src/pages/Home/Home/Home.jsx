import React from 'react'
import Banner from '../Banner/Banner'
import HowWorks from '../HowWorks/HowWorks'
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider'
import JobCategories from '../JobCategories/JobCategories'
import useTitle from '../../../hooks/useTitle'

const Home = () => {
  useTitle("JobFusion | Home")
  return (
    <div>
      <Banner></Banner>
      <JobCategories></JobCategories>
      <HowWorks></HowWorks>
      <TestimonialSlider></TestimonialSlider>
    </div>
  )
}

export default Home