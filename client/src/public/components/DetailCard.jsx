import { useState } from "react"

const DetailCard = () => {
    const [singleProduct, setSingleProduct] = useState({
        name: "Dell XPS 13 Pro",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex facilis, doloribus modi atque itaque suscipit nihil, at, id nemo nisi? Ducimus quidem sint nesciunt in saepe numquam, laudantium architecto.",
        price: 98999,
        images: ["https://rukminim1.flixcart.com/image/416/416/kirr24w0/computer/x/t/w/dell-na-thin-and-light-laptop-original-imafyhm53umy7d4d.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/k/c/5/xps-9305-notebook-dell-original-imag3nzeyqfcsw3v.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/y/x/h/xps-9305-notebook-dell-original-imag3nzemwhaywah.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/n/n/u/xps-9305-notebook-dell-original-imag3nzefmgybwej.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/h/3/x/xps-9305-notebook-dell-original-imag3nzeasggy4jk.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/t/j/6/xps-9305-notebook-dell-original-imag3nzeejyx8uwd.jpeg?q=70"],
        stock: 5

    })
    return <><div className="container">
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
    const imagesContent = singleProduct.images.map(item => <img
        src={item}
        key={item}
        className="img-fluid py-2"
        onMouseEnter={e => setSource(item)}
        alt={singleProduct.name} />)

    const [source, setSource] = useState(singleProduct.images[0])
    const [qty, setQty] = useState(1)
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
                        <button type="button" class="btn btn-primary">Add To Cart</button>
                    </div>
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