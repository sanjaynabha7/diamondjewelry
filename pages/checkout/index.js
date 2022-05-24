import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { removeToCart } from '../../store/actions/cart'
import Link from 'next/link';
const Checkout = ({ Cart }) => {
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
    }, [Cart])


    return (
        <section className="shop_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Checkout
                    </h2>
                </div>


                <div className="row">
                    <div className="col-12 col-md-7 col-lg-7">
                        <div className="wd-progress-bar wd-free-progress-bar">
                            <div className="progress-msg">
                                Add <strong><span>$1341</span></strong> to cart and get <span><strong>free shipping!</strong></span></div>
                            <div className="progress-area">
                                <div className="progress-bar"></div>
                            </div>
                        </div>

                        <div className="row" id="customer_details">
                            <div className="col-12">
                                <div className="billing-fields">
                                    <div className="billing-fields__field-wrapper">
                                        <div className="billing-fields">
                                            <h3>Billing details</h3>
                                            <div className="billing-fields__field-wrapper">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <p className="form-row form-row-first validate-required" id="billing_first_name_field" data-priority="10">
                                                            <label htmlFor="billing_first_name" className="">First name&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                            <input type="text" className="input-text " name="billing_first_name" id="billing_first_name" placeholder="" autoComplete="given-name" />
                                                        </p>
                                                    </div>
                                                    <div className="col-6">
                                                        <p className="form-row form-row-first validate-required" id="billing_first_name_field" data-priority="10">
                                                            <label htmlFor="billing_first_name" className="">Last name&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                            <input type="text" className="input-text " name="billing_first_name" id="billing_first_name" placeholder="" autoComplete="given-name" />

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p className="form-row form-row-first validate-required" id="billing_first_name_field" data-priority="10">
                                                            <label htmlFor="billing_first_name" className="">Company name (optional)</label>
                                                            <input type="text" className="input-text " name="billing_first_name" id="billing_first_name" placeholder="" autoComplete="given-name" />
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p className="form-row form-row-first validate-required" id="billing_first_name_field" data-priority="10">
                                                            <label htmlFor="billing_first_name" className="">Street address * &nbsp;<abbr className="required" title="required">*</abbr></label>

                                                            <input type="text" className="input-text " name="billing_first_name" id="billing_first_name" placeholder="House number and street name" autoComplete="given-name" />

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p className="form-row form-row-first validate-required" id="billing_first_name_field" data-priority="10">
                                                            <input type="text" className="input-text " name="billing_first_name" id="billing_first_name" placeholder="Apartment, suite, unit, etc. (optional)" autoComplete="given-name" />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="account-fields">
                                        <p className="form-row form-row-wide create-account validated">
                                            <label className="form__label form__label-for-checkbox checkbox">
                                                <input className="form__input form__input-checkbox input-checkbox" id="createaccount" type="checkbox" name="createaccount" value="1" /> <span>Create an account?</span>
                                            </label>
                                        </p>
                                        <div className="create-account">
                                            <p className="form-row validate-required" id="account_username_field" data-priority="">
                                                <label htmlFor="account_username" className="">Account username&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                <input type="text" className="input-text " name="account_username" id="account_username" placeholder="Username" value="" />
                                            </p>
                                            <p className="form-row validate-required" id="account_password_field" data-priority="">
                                                <label htmlFor="account_password" className="">Create account password&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                <input type="password" className="input-text " name="account_password" id="account_password" placeholder="Password" value="" /><span className="show-password-input">
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
      
                            </div>


                            <div className="col-12">
                                <div className="shipping-fields">
                                    <h3 id="ship-to-different-address">
                                        <label className="form__label form__label-for-checkbox checkbox">
                                            <input id="ship-to-different-address-checkbox" className="form__input form__input-checkbox input-checkbox" type="checkbox" name="ship_to_different_address" value="1" /> <span>Ship to a different address?</span>
                                        </label>
                                    </h3>

                                    <div className="shipping_address">
                                        <div className="shipping-fields__field-wrapper">

                                        </div>
                                    </div>
                                </div>
                                <div className="additional-fields">
                                    <div className="additional-fields__field-wrapper">
                                        <p className="form-row notes" id="order_comments_field" data-priority="">
                                            <label htmlFor="order_comments" className="">Order notes&nbsp;<span className="optional">(optional)</span></label>
                                            <textarea name="order_comments" className="input-text " id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." ></textarea>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="wc-proceed-to-checkout">
                                    <Link href={`/checkout`} ><a className="checkout-button button alt wc-forward"> Place Order</a></Link>
                                </div>

                        </div>
                    </div>
                    <div className="col-sm-5 col-md-5 col-lg-5">
                        <div className="cart_totals ">

                            <div className="cart-totals-inner">
                                <h2>Order Summary</h2>


                                <ul className="cart_list product_list_widget mini-cart ">
                                    {Cart.map((item) => (
                                        <li className="mini_cart_item" key={item._id}>
                                            <img className='cart-item-image' src={item.productImage} />
                                            <div className="cart-info">
                                                <span className="wd-entities-title">{item.title}</span>
                                                <span className="quantity">
                                                    {item.cartQty} X <span className="price-amount amount">
                                                        <bdi><span className="price-currencySymbol">$</span>{item.newPrice}</bdi>
                                                    </span>
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

const mapStateToProps = ({ Cart }) => ({ Cart })
export default connect(mapStateToProps, { removeToCart })(Checkout)
