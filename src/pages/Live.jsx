import React from 'react'
import Layout from '../components/Layout'
import Streaming from '../components/Streaming'
import Stream from '../components/Stream'
import Updates from '../components/Updates'
import LivePst from '../components/LivePst'
import MyExperience from '../components/MyExperience'
import Carouse from '../components/Carouse'
Carouse


export default function Live() {
  return (
    <Layout>
    <LivePst/>
    <Streaming/>
    <Stream/>
     <MyExperience/>
    <Updates/>
    <Carouse/>
    
  </Layout>
  )
}
