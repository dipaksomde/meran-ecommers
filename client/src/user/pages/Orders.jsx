import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../../redux/user/userActions'
import { Link } from 'react-router-dom'

const Orders = () => {
    const { orderHistory } = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserOrders())
    }, [])

    if (orderHistory && orderHistory.length === 0) {
        return <div className='container'>
            <h1>No  Orders</h1>
            <Link to="/" className='btn btn-outline-primary'>Shop Now</Link>
        </div>
    }

    const content = orderHistory && orderHistory.map((item, i) => <tr key={item.id}>
        <td>{i + 1}</td>
        <td>{item.status}</td>
        <td>{item.paid ? "Paid" : "UnPaid"}</td>
        <td>
            {item.products.map(pro => <div class="card">
                <div class="card-body text-dark d-flex gap-5">
                    <img
                        width={100}
                        src={pro.images[0]}
                        alt={pro.name}
                        className="img-fluid" />
                    <p className='fs-5'>{pro.name}</p>
                </div>
            </div>)}
        </td>
        <td>
            <button type="button" class="btn btn-outline-danger">
                <i className='bi bi-trash'></i>
            </button>
        </td>

    </tr>)

    return <div className='container'>
        <table class="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Status</th>
                    <th>paid</th>
                    <th>Products</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {content}
            </tbody>
        </table>

    </div>
}

export default Orders