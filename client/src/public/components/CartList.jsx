import React from 'react'
import BillCard from './BillCard'

const CartList = () => {
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