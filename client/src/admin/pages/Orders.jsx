import React, { useState } from 'react'
import Grid from '../components/Grid'

const Orders = () => {
    const [selectedOrder, setSelectedOrder] = useState()
    return <>
        <Grid
            col1={<OrderList setSelectedOrder={setSelectedOrder} />}
            col2={<Details selectedOrder={selectedOrder} />}
            col3={<EditOrder />} />
    </>
}
const OrderList = ({ setSelectedOrder }) => {
    const orders = []
    for (let i = 1; i <= 10; i++) {
        orders.push({
            id: 45 + i,
            user: { id: 1, name: "john", email: "john@gmail.com" },
            products: [
                { id: 11, name: "laptop", qty: 1, price: 45000 },
                { id: 22, name: "mouse", qty: 2, price: 2500 },
            ],
            total: 50000 + (i * i),
            delivered: false,
            status: "dispatch"
        })
    }
    const content = orders.map(item => <li class="list-group-item d-flex justify-content-between">
        <span>{item.user.name}</span>
        <span>{item.total}</span>
        <span>{item.status}</span>
        <button
            onClick={e => setSelectedOrder(item)}
            type="button"
            class="btn btn-sm btn-primary">Details</button>
    </li>)

    return <div class="card">
        <div className="card-header">Orders</div>
        <div class="card-body">
            <ul class="list-group">
                <li className='list-group-item'>
                    <input type="text" className='form-control' placeholder='search order' />
                </li>
                {content}
            </ul>
        </div>
    </div>
}
const Details = ({ selectedOrder }) => {
    return <>
        {
            selectedOrder && <div class="card">
                <div class="card-header d-flex justify-content-between">
                    Order Detail
                    <button
                        type="button"
                        class="btn btn-warning btn-sm">
                        edit</button>
                </div>
                <div class="card-body">
                    <h1>Order Id  {selectedOrder.id} </h1>
                    <h6>Status  {selectedOrder.status} </h6>
                    <h6>Delivered   {selectedOrder.delivered ? "yes" : "no"}</h6>
                    <h6>Name   {selectedOrder.user.name}</h6>

                </div>
            </div>
        }
    </>
}
const EditOrder = () => {

    return <>
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                Edit Order
                <button
                    type="button"
                    class="btn btn-outline-danger">
                    Cancel Order
                </button>
            </div>
            <div class="card-body">
                <select className='form-control'>
                    <option value="">Transit</option>
                    <option value="">Dispatch</option>
                    <option value="">Out For Delivery</option>
                    <option value="">Delivered</option>
                </select>
                <br />
                <button
                    type="button"
                    class="btn btn-primary w-100">
                    Change Status
                </button>


            </div>
        </div>
    </>
}
export default Orders