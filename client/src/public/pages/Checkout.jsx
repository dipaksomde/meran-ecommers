import React from 'react'
import { useNavigate } from 'react-router-dom'
import BillCard from '../components/BillCard'

const Checkout = () => {
    const cartProducts = []
    for (let i = 1; i <= 5; i++) {
        cartProducts.push({
            id: i,
            name: `Product ${i}`,
            qty: i,
            price: 250,
            images: ["https://rukminim1.flixcart.com/image/416/416/kirr24w0/computer/x/t/w/dell-na-thin-and-light-laptop-original-imafyhm53umy7d4d.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/k/c/5/xps-9305-notebook-dell-original-imag3nzeyqfcsw3v.jpeg?q=70"]
        })
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <LeftColumn />
                </div>
                <div className="col-sm-4">
                    <BillCard cartProducts={cartProducts} />
                </div>
            </div>
        </div>
    </>
}

const LeftColumn = () => {
    const navigate = useNavigate()
    const handleCheckout = () => {
        navigate("/payment-success")
    }
    return <>
        <div>
            <div class="card">
                <div class="card-header">Choose Address</div>
                <div class="card-body">
                    <div>
                        <input type="radio" className='form-check-input' />
                        <p><strong>Home Address</strong></p>
                        <p>Fake Home</p>
                        <p>Fake Street</p>
                        <p>Abd, MH 431005</p>
                    </div>
                </div>
            </div>
            <div class="card mt-4">
                <div class="card-header">Choose Payment Method</div>
                <div class="card-body">
                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="payment" id="cod" />
                            <label class="form-check-label" for="cod">
                                COD
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="payment" id="online" />
                            <label class="form-check-label" for="online">
                                Online
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={handleCheckout} type="button" class="btn btn-primary w-100 btn-lg mt-4">Place Order</button>
        </div>
    </>
}

export default Checkout