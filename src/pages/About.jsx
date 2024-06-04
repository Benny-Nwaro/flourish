import React from 'react'
import Layout from '../components/Layout'
import Mission from '../components/Mission'
import Vision from '../components/Vision'
import Updates from '../components/Updates'
import Approach from '../components/Approach'
import Flourishing from '../components/Flourishing'
import WeFlourish from '../components/WeFlourish'
import MyExperience from '../components/MyExperience'
MyExperience


export default function About() {
  return (
    <Layout>
      <WeFlourish/>
      <Flourishing/>
      <Mission/>
      <Vision/>
     <MyExperience/>
      <Approach/>
      <Updates/>

  </Layout>
  )
}
