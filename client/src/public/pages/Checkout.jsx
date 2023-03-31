import React from 'react'
import { useNavigate } from 'react-router-dom'
import BillCard from '../components/BillCard'
import { useSelector, useDispatch } from 'react-redux'
import { placeOrder } from '../../redux/user/userActions'
import { useEffect } from 'react'
import { emptyCart } from '../../redux/public/publicSlice'
const Checkout = () => {
    const { cart } = useSelector(state => state.public)
    const navigate = useNavigate()
    useEffect(() => {
        if (cart.length === 0) {
            navigate("/user")
        }
    }, [])


    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <LeftColumn />
                </div>
                <div className="col-sm-4">
                    <BillCard cartProducts={cart} />
                </div>
            </div>
        </div>
    </>
}

const LeftColumn = () => {
    const { info, placed } = useSelector(state => state.user)
    const { cart } = useSelector(state => state.public)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (placed) {
            dispatch(emptyCart())
            navigate("/payment-success")

        }
    }, [placed])

    const handleCheckout = () => {
        dispatch(placeOrder(cart))
        // navigate("/payment-success")
    }
    return <>
        <div>
            <div class="card">
                <div class="card-header">Choose Address</div>
                <div class="card-body">
                    <div>
                        <input type="radio" className='form-check-input' />
                        <p><strong>Home Address</strong></p>
                        <p>{info.address.house}</p>
                        <p>{info.address.street}</p>
                        <p>{info.address.city}</p>
                        <p>{info.address.pin}</p>
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