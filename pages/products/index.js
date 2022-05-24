import React from 'react'
import HomeProducts from '../../components/products/homeProducts'
import baseUrl from '../../helper/baseUrl'
const ProductsPage = ({products}) => {
    return (
       <HomeProducts products={products}/>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(`${baseUrl}/api/products`)
    const data = await res.json();
    return {
        props: { products: data },
    }
  }

export default ProductsPage


