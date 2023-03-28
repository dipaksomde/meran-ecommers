import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductDetail } from "../../redux/public/publicAction"
import { addToCart } from "../../redux/public/publicSlice"

const DetailCard = () => {
    const { productId } = useParams()
    const { singleProduct, loading, error } = useSelector(state => state.public)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductDetail(productId))
    }, [])
    return singleProduct && <><div className="container">
        <div className="row">
            <div className="col-sm-5">
                <LeftColumn singleProduct={singleProduct} />
            </div>
            <div className="col-sm-7">
                <RightColum singleProduct={singleProduct} />
            </div>
        </div>
    </div>
    </>
}


const LeftColumn = ({ singleProduct }) => {

    const dispatch = useDispatch()
    const [qty, setQty] = useState(1)

    const handleAddToCart = () => {
        dispatch(addToCart({ ...singleProduct, qty }))
    }
    const imagesContent = singleProduct.images.map(item => <img
        src={item}
        key={item}
        className="img-fluid py-2"
        onMouseEnter={e => setSource(item)}
        alt={singleProduct.name} />)

    const [source, setSource] = useState(singleProduct.images[0])
    return <div className="card">
        <div className="card-body">
            <div className="row">
                <div className="col-sm-2">
                    {imagesContent}
                </div>
                <div className="col-sm-10">
                    <img
                        className="img-fluid"
                        src={source}
                        style={{ height: "250px" }}
                        alt="" />

                    {
                        singleProduct.available
                            ? <>
                                <div class="d-flex justify-content-center gap-4 mb-4">
                                    <button
                                        type="button"
                                        onClick={e => setQty(qty === 1 ? 1 : qty - 1)}
                                        class="btn btn-sm btn-outline-dark w-100">-</button>
                                    <span className="fs-4">{qty}</span>
                                    <button
                                        type="button"
                                        onClick={e => setQty(qty === singleProduct.stock ? qty : qty + 1)}
                                        class="btn btn-sm btn-outline-dark w-100">+</button>
                                </div>
                                <div class="btn-group w-100 btn-group-lg">
                                    <button type="button" class="btn btn-warning">Buy Now</button>
                                    <button
                                        onClick={handleAddToCart}
                                        type="button"
                                        class="btn btn-primary">Add To Cart</button>
                                </div>
                            </>
                            : <span className="fs-5">Outoff Stock</span>
                    }
                </div>
            </div>
        </div>
    </div>
}
const RightColum = ({ singleProduct }) => {
    return <>
        <h1>{singleProduct.name}</h1>
        <p>price <strong> {singleProduct.price}/-</strong></p>
        <p>{singleProduct.desc}</p>
    </>
}
export default DetailCard