import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { removeToCart } from '../../store/actions/cart'
import Link from 'next/link';
const Cart = ({ Cart, removeToCart }) => {
    const [totalAmount, setTotalAmount] = useState(0)
    const [Increment, setIncrement] = useState(0)

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
    }, [Cart, Increment, removeToCart])

    const addCart = (item) => {
        
        item.cartQty += 1
        setIncrement(Increment + 1)
    }

    const minusCart = (item) => {
        item.cartQty -= 1
        setIncrement(Increment - 1)
    }

    return (
        <section className="shop_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Cart
                    </h2>
                </div>

                {!Cart.length ? <h2>No item in cart</h2> :
                    <div className="row">
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="cart-table-section">
                                <table className="shop_table shop_table_responsive cart cart-form__contents" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th className="product-remove">&nbsp;</th>
                                            <th className="product-thumbnail">&nbsp;</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Cart.map((item) => (
                                            <tr className="cart-form__cart-item cart_item" key={item._id}>
                                                <td className="product-remove">
                                                    <span lassName="remove" onClick={() => removeToCart(item._id)}>X</span>
                                                </td>
                                                <td className="product-thumbnail">
                                                    <Link href={`/products/${item.slug}`} ><a>   <img src={item.productImage} className="attachment size-thumbnail" /></a></Link>
                                                </td>
                                                <td className="product-name" data-title="Product">
                                                    <Link href={`/products/${item.slug}`} ><a>{item.title}</a></Link>
                                                </td>
                                                <td className="product-price" data-title="Price">
                                                    <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>{item.newPrice}</bdi></span>
                                                </td>
                                                <td className="product-quantity" data-title="Quantity">
                                                    <div className="quantity">
                                                        <input type="button" value="-" className="minus" onClick={() => minusCart(item)} />
                                                        <input type="number" className="input-text qty text" value={item.cartQty} title="Qty" />
                                                        <input type="button" value="+" className="plus" onClick={() => addCart(item)} />
                                                    </div>
                                                </td>
                                                <td className="product-subtotal" data-title="Subtotal">
                                                    <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>{item.cartQty * item.newPrice}</bdi></span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="row cart-actions">
                                    <div className="col-12 order-last order-md-first col-md">
                                        <div className="coupon">
                                            <label htmlFor="coupon_code">Coupon:</label>
                                            <input type="text" name="coupon_code" className="input-text" id="coupon_code" placeholder="Coupon code" />
                                            <button type="submit" className="button" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className="cart_totals ">

                                <div className="cart-totals-inner">
                                    <h2>Cart totals</h2>

                                    <table cellSpacing="0" className="shop_table shop_table_responsive">
                                        <tbody>
                                            <tr className="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td data-title="Subtotal">
                                                    <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>{totalAmount}</bdi>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr className="shipping-totals shipping">
                                                <th>Shipping</th>
                                                <td data-title="Shipping">
                                                    <p className="shipping-destination">
                                                        Shipping to <strong>AL</strong>.
                                                    </p>
                                                    <a href="#" className="shipping-calculator-button">Change address</a>
                                                </td>
                                            </tr>
                                            <tr className="order-total">
                                                <th>Total</th>
                                                <td data-title="Total"><strong><span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>{totalAmount}</bdi></span></strong> </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="wc-proceed-to-checkout">
                                        <Link href={`/checkout`} ><a className="checkout-button button alt wc-forward"> Proceed to checkout </a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                }



            </div>


        </section >
    )
}


const mapStateToProps = ({ Cart }) => ({ Cart })
export default connect(mapStateToProps, { removeToCart })(Cart)