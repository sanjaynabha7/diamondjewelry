import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link';
const CartSidebar = ({ closeSidebar, Cart }) => {
    const [totalAmount, setTotalAmount] = useState(0)
    useEffect(() => {
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
    }, [Cart])

    return (<>
    <div className="wd-close-side close-side wd-close-side-opened" onClick={closeSidebar}
    
    ></div>
    <div className="cart-widget-side wd-side-hidden wd-right wd-opened">
            
            <div className="wd-heading widget-heading">
                <span className="title widget-title">Shopping cart {Cart.length}</span>
                <div className="close-side-widget wd-action-btn wd-style-text wd-cross-icon">
                    <span onClick={closeSidebar}>close</span>
                </div>
            </div>
            <div className="widget widget_shopping_cart">
                <div className="widget_shopping_cart_content">
                    <div className="shopping-cart-widget-body wd-scroll">
                        <div className="wd-scroll-content">
                            <ul className="cart_list product_list_widget mini-cart ">
                                {Cart.map((item) => (
                                    <li className="mini_cart_item" key={item._id}>
                                        {/* <Link href='/products/[slug].js' as={`/products/${item.slug}`}>  {item.slug}  </Link> */}

                                        <img className='cart-item-image' src={item.productImage} />
                                        <div className="cart-info">
                                            <span className="wd-entities-title">{item.title}</span>
                                            <div className="single_variation_wrap">
                                                <div className="variation-add-to-cart variations_button variation-add-to-cart-disabled">
                                                    <div className="quantity">
                                                        <input type="button" value="-" className="minus" />
                                                        <input type="number" className="input-text qty text" value={item.cartQty} title="Qty" />
                                                        <input type="button" value="+" className="plus" />
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="quantity">
                                                {item.cartQty} X <span className="price-amount amount">
                                                    <bdi><span className="price-currencySymbol">$</span>{item.newPrice}</bdi>
                                                </span>
                                            </span>
                                        </div>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="shopping-cart-widget-footer">
                        <p className="mini-cart__total total">
                            <strong>Subtotal:</strong> <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>{totalAmount}</bdi></span>
                        </p>
                        <p className="mini-cart__buttons buttons">
                            <Link href="/cart" ><a className="button btn-cart wc-forward">View cart</a></Link>
                            <Link href="/checkout" ><a className="button btn-cart wc-forward">Checkout</a></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
       
    )
}

const mapStateToProps = ({ Cart }) => ({ Cart })
export default connect(mapStateToProps, {})(CartSidebar)
