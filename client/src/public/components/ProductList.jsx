import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const products = []
    for (let i = 0; i < 10; i++) {
        products.push({
            id: i,
            name: `Product ${i}`,
            desc: "Lorem ipsum dolor sit amet.",
            price: Math.floor(i * Math.random() + 200),
            image: "https://rukminim1.flixcart.com/image/416/416/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70"
        })
    }

    const content = products.map(item => <>
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
            <img src={product.image} class="img-fluid" alt="" />
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