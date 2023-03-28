import { Link } from "react-router-dom"

const BillCard = ({ cartProducts, showBtn = false }) => {

    const content = cartProducts.map(item => <li
        className='list-group-item d-flex justify-content-between'
        key={item.name}>
        <p>{item.name}</p>
        <p>{item.price} X {item.qty}</p>
        <p>{item.price * item.qty}</p>
    </li>)

    const est = cartProducts.reduce((sum, item) => sum + (item.price * item.qty), 0)
    const gst = est * 28 / 100
    const total = est + gst

    return <div class="card">
        <div class="card-header">Estimated Bill</div>
        <div class="card-body">
            <ul class="list-group">
                {content}
            </ul>
        </div>
        <div className="card-footer">
            <p className='d-flex justify-content-between'>Est.  <strong>{est}</strong> </p>
            <p className='d-flex justify-content-between'>GST  <strong>{gst}</strong> </p>
            <p className='d-flex justify-content-between'>Total  <strong>{total}</strong> </p>
            {
                showBtn && <Link to="/checkout" class="btn btn-primary w-100">Checkout</Link>
            }
        </div>
    </div>
}

export default BillCard