import React from 'react'
import { useSelector } from 'react-redux'
import BillCard from './BillCard'

const CartList = () => {
    const { cart: cartProducts } = useSelector(state => state.public)
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <LeftColumn cartProducts={cartProducts} />
                </div>
                <div className="col-sm-4">
                    <BillCard
                        cartProducts={cartProducts}
                        showBtn={true} />
                </div>
            </div>
        </div>


    </>
}

const LeftColumn = ({ cartProducts }) => {
    const content = cartProducts.map(item => <li
        class="list-group-item d-flex justify-content-between" key={item.id}>
        <div className='d-flex gap-5'>
            <img
                width={100}
                src={item.images[0]}
                className="img-fluid"
                alt={item.name} />
            <p className='fs-6'>{item.name}</p>
        </div>
        <p>{item.qty}</p>
    </li>)
    return <ul class="list-group">
        {content}
    </ul>
}

export default CartList