import React from 'react'
import Layout from '../components/Layout'
import Playlist from '../components/Playlist'
import LatestSermons from '../components/LatestSermons'
import Updates from '../components/Updates'



export default function Sermons() {
  return (
    
    <Layout>
      <LatestSermons/>
      <div className='px-48 pt-5'>

      <Playlist/>
      </div>
      <Updates/>
 
  </Layout>
  )
}
