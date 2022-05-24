import React from 'react'
import HomeProducts from '../../components/products/homeProducts'
const ProductsPage = ({products}) => {
    return (
       <HomeProducts products={products}/>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/products')
    const data = await res.json();
    return {
        props: { products: data },
    }
  }

export default ProductsPage


