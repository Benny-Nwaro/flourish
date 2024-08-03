import React from 'react'
import Layout from '../components/Layout'
import Flourish from '../components/Flourish'
import WhatsComing from '../components/WhatsComing'
import Trainings from '../components/Trainings'
import Statement from '../components/Statement'
import Ministries from '../components/Ministries'
import Pastor from '../components/Pastor'
import Location from '../components/Location'
import Invest from '../components/Invest'
import Updates from '../components/Updates'



export default function Home() {
  return (
    <div>
          <Layout>
    
    <Flourish/>
    <WhatsComing/>
    <Trainings/>
    <Statement/>
    <Ministries/>
    <Pastor/>
    <Location/>
    <Invest/>
    <Updates/>
  </Layout>
    </div>

  )
}
