import React from 'react'
import Layout from '../components/Layout'
import BlogsSection from '../components/BlogsSection'
import BlogsTop from '../components/BlogsTop'
import Updates from '../components/Updates'
Updates

export default function Blogs() {
  return (
    <Layout>
    <BlogsTop/>
    <BlogsSection/>
    <Updates/>
  </Layout>
  )
}
