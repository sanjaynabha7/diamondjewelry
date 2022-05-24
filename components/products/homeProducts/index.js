import React, { useState } from 'react'
import Link from 'next/link'
import { addToCart } from '../../../store/actions/cart'
import { connect } from 'react-redux'
import CartSidebar from '../../cart-sidebar'
const HomeProducts = ({ products, addToCart }) => {

    const [sidebar, setSidebar] = useState(false)

    const cartItem = (item) => {
        addToCart(item)
        setSidebar(true)
    }
    const closeSidebar = () => {
        
        setSidebar(false)
    }
    return (
        <section className="shop_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Latest Products
                    </h2>
                </div>
                <div className="row">
                    {products.map((item) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={item._id}>
                            <div className="box">
                                <div className="img-box">
                                    <Link href={`/products/${item.slug}`}><a ><img src={item.productImage} /></a></Link>
                                </div>
                                <div className="detail-box-flat">
                                    <Link href={`/products/${item.slug}`}><a ><h6>{item.title}</h6></a></Link>
                                    <p className="price">
                                        <del aria-hidden="true">
                                            <span className="price-amount">
                                                <bdi>
                                                    <span className="price-currencySymbol">$</span>{item.oldPrice}
                                                </bdi>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>{item.newPrice}</bdi></span>
                                        </ins>
                                    </p>
                                    <div className="new">
                                        <span><span className='offText'>Off</span> <span className='offAmount'>{Math.trunc((100 - (item.newPrice / item.oldPrice * 100)))}<span className='percentage'>%</span></span></span>
                                    </div>
                                    <div className="add-to-cart-list">
                                        <button className='addToCartBtn' onClick={() => cartItem(item)} >Add to cart</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="btn-box">
                    <Link href="/products">
                        <a>
                            View All Products
                        </a>
                    </Link>

                </div>
            </div>
            {sidebar ? <CartSidebar closeSidebar={closeSidebar} /> : null}

        </section >
    )
}


const mapStateToProps = ({ Cart }) => ({ Cart })
export default connect(mapStateToProps, { addToCart })(HomeProducts)

