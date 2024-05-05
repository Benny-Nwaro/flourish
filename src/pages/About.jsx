import React from 'react'
import Layout from '../components/Layout'
import Mission from '../components/Mission'
import Vision from '../components/Vision'
import Updates from '../components/Updates'
import Experience from '../components/Experience'
import Approach from '../components/Approach'
import Flourishing from '../components/Flourishing'
import WeFlourish from '../components/WeFlourish'
WeFlourish


export default function About() {
  return (
    <Layout>
      <WeFlourish/>
      <Flourishing/>
      <Mission/>
      <Vision/>
     <Experience/>
      <Approach/>
      <Updates/>

  </Layout>
  )
}
