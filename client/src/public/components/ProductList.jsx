import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProducts } from '../../redux/public/publicAction'

const ProductList = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.public)
    useEffect(() => {
        dispatch(getProducts())
    }, [])


    const content = products && products.map(item => <>
        <div class="col-sm-3 my-3">
            <Link
                className='text-decoration-none text-dark'
                to={`/product-detail/${item.id}`}>
                <ProductCard
                    product={item}
                />
            </Link>
        </div>
    </>
    )
    return <>
        <div className="container">
            <div className="row">
                {content}
            </div>
        </div>
    </>
}

const ProductCard = ({ product }) => {
    return <>
        <div class="card">
            <img src={product.images} class="img-fluid py-3 px-4" alt="" />
            <div class="card-body">
                <h6>{product.name}</h6>
                <p>{product.desc}</p>
                <p>
                    Starting From
                    <strong>${product.price}/-</strong>
                </p>
            </div>
        </div>
    </>
}

export default ProductList