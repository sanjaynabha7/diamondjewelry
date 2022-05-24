import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { Increment, Decrement } from '../../store/actions/counter'
import { connect } from 'react-redux'
import { addToCart } from '../../store/actions/cart'
const ProductDetails = ({Cart, item, addToCart }) => {
    
    const [totalAmount, setTotalAmount] = useState(0)
    const [Increment, setIncrement] = useState(0)
    const [cartQty, setCartQty] = useState(0)





       useEffect(() => {
        
        if(!item.hasOwnProperty('cartQty')){
            item.cartQty = 0
        }
        var lastPrice = []
        for (let i = 0; i < Cart.length; i++) {
            for (let j = 0; j < Cart[i].cartQty; j++) {
                lastPrice.push(Cart[i].newPrice)
            }
        }
        if (lastPrice.length) {
            const sumTotal = lastPrice.reduce((preValue, curValue) => preValue + curValue);
            setTotalAmount(sumTotal)
        }
    }, [Cart, Increment])

    const addCart = (item) => {
        
        item.cartQty += 1
        setIncrement(Increment + 1)
    }

    const minusCart = (item) => {
        item.cartQty -= 1
        setIncrement(Increment - 1)
    }

    const cartItem = (item) => {
        
        addToCart(item)
    }
    return (
        <div className='product-details'>
            <div className="container">
                <div className='product-details-inner'>
                    <div className='row content-row mb-4'>
                        <div className="product-gallery large-8 col">
                            <div className='product-feature'>
                                <img src={item.productImage}></img>
                            </div>
                            <div className='product-gallery'>
                                <ul>{item.imageGallery && item.imageGallery.map((res, index) => (
                                    <li key={index}><img src={res}></img></li>
                                ))}</ul>
                            </div>
                        </div>
                        <div className="product-info summary col-fit col entry-summary product-summary col-md-4">
                            <div className='product-information'>
                                <div className="heading_container"><h1>{item.title}</h1></div>
                                <div className="is-divider small"></div>
                                <div className="product-short-description">
                                    <p>Cushion Diamond Engagement Ring (18k white gold, diamonds .52 cttw.)</p>
                                    <p><em>*Center diamond sold separately</em></p>
                                </div>
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
                                <div className="single_variation_wrap">
                                    <div className="variation-add-to-cart variations_button variation-add-to-cart-disabled">
                                        <div className="quantity">
                                            <input type="button" value="-" className="minus" onClick={() => minusCart(item)} />
                                            <input type="number" className="input-text qty text" value={item.cartQty} title="Qty" />
                                            <input type="button" value="+" className="plus" onClick={() => addCart(item)} />
                                        </div>
                                        <button type="submit" className="single_add_to_cart_button button alt disabled wc-variation-selection-needed" onClick={() => cartItem(item)}>Add to cart</button>
                                    </div>
                                </div>
                                <div className="product_meta">
                                    <span className="sku_wrapper">Item: <span className="sku">{item.sku}</span></span>
                                    <span className="posted_in categories-list">Categories: <ul>{item.category && item.category.map((res, index) => (
                                        <li key={index}><Link href="">{res}</Link></li>
                                    ))}</ul></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-footer">
                <div className="container">
                    <div className="product-page-sections">
                        <div className="product-section">
                            <div className="row">
                                <div className="col-md-2 pb-0 mb-0">
                                    <h5 className="uppercase mt sub-title">Description</h5>
                                </div>
                                <div className="col-md-10 pb-0 mb-0">
                                    <div className="panel entry-content">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="related related-products-wrapper product-section">
                        <h5 className="product-section-title sub-title uppercase">Related products</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const getStaticPaths = async () => {
    const res = await fetch('https://diamondjewelry.vercel.app/api/products')
    const data = await res.json();
    let paths = data.map(res => {
        return {
            params: { slug: res.slug }
        }
    })
    return { paths, fallback: false }
}


export const getStaticProps = async ({ params }) => {
    const slug = params.slug
    const res = await fetch(`https://diamondjewelry.vercel.app/api/products`)
    const data = await res.json();
    const filter = data.filter((res) => res.slug === slug)[0]
    return {
        props: { item: filter },
    }
}


const mapStateToProps = ({ Counter, Cart }) => ({ Counter, Cart })
export default connect(mapStateToProps, { Increment, Decrement, addToCart, })(ProductDetails)
