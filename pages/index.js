import styles from '../styles/Home.module.css'
import HomeProducts from '../components/products/homeProducts'
import Testimonials from '../components/testimonials'
import About from './about-us'
import Blogs from '../components/blogs'
import Offers from './offers'
import Banners from '../components/banners'
export default function Home({ products, homeBlog }) {
  return (
    <>
      <Banners></Banners>
      <main className={styles.main}>
        <HomeProducts products={products} />
        <About></About>
        <Offers></Offers>
        {/* <Blogs BlogData={homeBlog} homePage={true}/> */}
        <Testimonials></Testimonials>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://diamondjewelry.vercel.app/api/products')
  const data = await res.json();

  // const blogRes = await fetch('http://localhost:3000/api/blogs')
  // const BlogData = await blogRes.json();
  // const homeBlog = BlogData.slice(0, 2)


  return {
    props: { products: data },
  }
}

