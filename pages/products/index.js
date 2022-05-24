import React from 'react'
import HomeProducts from '../../components/products/homeProducts'
const ProductsPage = ({products}) => {
    return (
       <HomeProducts products={products}/>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://diamondjewelry.vercel.app/api/products')
    const data = await res.json();
    return {
        props: { products: data },
    }
  }

export default ProductsPage


