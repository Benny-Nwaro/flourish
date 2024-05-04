import React from 'react'
import Layout from '../components/Layout'
import Streaming from '../components/Streaming'
import Stream from '../components/Stream'
import Experience from '../components/Experience'
import Updates from '../components/Updates'
import LivePst from '../components/LivePst'
LivePst

export default function Live() {
  return (
    <Layout>
    <LivePst/>
    <Streaming/>
    <Stream/>
    <Experience/>
    <Updates/>
    
  </Layout>
  )
}
