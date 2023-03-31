import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BillCard from './BillCard'
import { deleteCartItem, emptyCart } from '../../redux/public/publicSlice'

const CartList = () => {
    const { cart: cartProducts } = useSelector(state => state.public)
    const dispatch = useDispatch()
    return <>
        <div className="container">
            <div className='my-3 col-sm-8 text-end'>
                <button
                    onClick={e => dispatch(emptyCart())}
                    type="button"
                    class="btn btn-outline-danger">
                    Empty Cart <i className='bi bi-trash'></i> </button>
            </div>
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
    const dispatch = useDispatch()
    const content = cartProducts.map((item, i) => <li
        class="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
        <div className='d-flex gap-5 align-items-center'>
            <img
                width={100}
                src={item.images[0]}
                className="img-fluid"
                alt={item.name} />
            <p className='fs-6'>{item.name}</p>
            <p>{item.qty}</p>
        </div>
        <button
            type="button"
            onClick={e => dispatch(deleteCartItem(i))}
            class="btn btn-outline-danger">
            <i className='bi bi-trash'></i>
        </button>
    </li>)
    return <>

        <ul class="list-group">
            {content}
        </ul >
    </>
}

export default CartList