import React from 'react'
import CartList from '../components/CartList'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart } = useSelector(state => state.public)
    if (cart.length === 0) {
        return <div className='container'>
            <h1>Cart Is Empty </h1>
            <Link className='btn btn-outline-primary' to="/">Start Shopping </Link>
        </div>
    }
    return <>
        <CartList />
    </>
}

export default Cart