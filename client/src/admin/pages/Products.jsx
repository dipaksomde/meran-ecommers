import React from 'react'
import Grid from '../components/Grid'
import { useFormik } from "formik"
import * as yup from "yup"

import { Link } from "react-router-dom"
const Products = () => {
    return <>
        <div className="text-end container mb-5">
            <button
                data-bs-toggle="modal"
                data-bs-target="#addProduct"
                type="button"
                class="btn btn-primary">+ Add Product</button>
        </div>
        <Grid
            col1={<ProductList />}
            col2={<ProductDetails />}
            col3={<ProductEdit />}
        />

        <AddProduct />

    </>
}
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
        <div class="col-sm-12 my-3">
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
const ProductDetails = () => {
    return <>
        <h1>ProductDetails</h1>
    </>
}
const ProductEdit = () => {
    return <>
        <h1>ProductEdit</h1>
    </>
}

const AddProduct = () => {
    const formik = useFormik({
        initialValues: {
            name: "ASUS Core i9 12th Gen",
            desc: "32 GB/1 TB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 6GB RTX 3060) N7601ZM-MQ931WS Gaming Laptop  (16 inch, Black, With MS Office",
            stock: 5,
            price: 192440,
            images: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/i/3/2/vivobook-pro-16x-gaming-laptop-asus-original-imagnwe9h5zyfaje.jpeg?q=70"
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            desc: yup.string().required(),
            stock: yup.string().required(),
            price: yup.string().required(),
            images: yup.string().required(),
        }),
        onSubmit: values => {
            console.log(values);
        }
    })

    return <>
        <div class="modal fade " id="addProduct" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <form onSubmit={formik.handleSubmit} >
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <pre>
                                {JSON.stringify(formik.errors, null, 2)}
                            </pre>
                            <div className='my-3'>
                                <label for="name" class="form-label">Product Name</label>
                                <input
                                    {...formik.getFieldProps("name")}
                                    type="text"
                                    className={`
                                            form-control  
                                            ${formik.touched.name && (formik.errors.name ? "is-invalid" : "is-valid")
                                        }
                                    `}
                                    placeholder="Enter Product Name" />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className='my-3'>
                                <label for="name" class="form-label">Product Description</label>
                                <input
                                    {...formik.getFieldProps("desc")}
                                    type="text"
                                    className={`
                                    form-control  
                                    ${formik.touched.desc && (formik.errors.desc ? "is-invalid" : "is-valid")
                                        }
                            `}
                                    placeholder="Enter Product Description" />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className='my-3'>
                                <label for="name" class="form-label">Product Price</label>
                                <input
                                    {...formik.getFieldProps("price")}
                                    type="number"
                                    className={`
                                    form-control  
                                    ${formik.touched.price && (formik.errors.price ? "is-invalid" : "is-valid")
                                        }
                            `}
                                    placeholder="Enter Product Price" />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className='my-3'>
                                <label for="name" class="form-label">Product Stock</label>
                                <input
                                    {...formik.getFieldProps("stock")}
                                    type="number"
                                    className={`
                                    form-control  
                                    ${formik.touched.stock && (formik.errors.stock ? "is-invalid" : "is-valid")
                                        }
                            `}
                                    placeholder="Enter Product Stock" />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className='my-3'>
                                <label for="name" class="form-label">Product Images</label>
                                <input
                                    {...formik.getFieldProps("images")}
                                    type="text"
                                    className={`
                                    form-control  
                                    ${formik.touched.images && (formik.errors.images ? "is-invalid" : "is-valid")
                                        }
                            `}
                                    placeholder="Enter Product Stock" />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button
                                type="submit"
                                class="btn btn-primary">Save changes</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Products