import { ProfileCard } from '../index'

const Profile = () => {
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6"><ProfileCard /></div>
                <div className="col-sm-6"><RightCard /></div>
            </div>
        </div>
    </>
}


const RightCard = () => {
    const orders = [
        { name: "keyboard", price: 450, qty: 2, paid: true, delivered: false },
        { name: "mouse", price: 750, qty: 1, paid: false, delivered: false },
    ]

    const content = orders.map(item => <li className='list-group-item d-flex justify-content-between' key={item.name}>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.qty}</p>
        <p>{item.delivered ? "Delivered" : "Dispatch"}</p>
        <p>{item.paid}</p>
        <button type="button" class="btn btn-outline-danger">
            <i className='bi bi-trash'></i>
        </button>
    </li>)
    return <>
        <div class="card">
            <div class="card-header">Recent Order</div>
            <div class="card-body">
                <ul class="list-group">
                    {content}
                </ul>
            </div>
        </div>
    </>
}

export default Profile