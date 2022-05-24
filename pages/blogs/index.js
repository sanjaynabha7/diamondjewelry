import React from 'react'
import Blogs from '../../components/blogs'
const BlogPage = ({ data }) => {
  return (
    <>
     <Blogs BlogData={data} />
    </>
   
  )
}

export const getStaticProps = async () => {
  const blogRes = await fetch('https://diamondjewelry.vercel.app/api/blogs')

  const BlogData = await blogRes.json();

  return {
    props: { data:BlogData },
  }
}

export default BlogPage


