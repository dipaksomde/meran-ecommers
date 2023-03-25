import React from 'react'

const Orders = () => {
    const userOrders = [
        {
            id: 1,
            status: "dispatch",
            paid: false,
            products: [
                {
                    id: 1,
                    name: "keyboard",
                    qty: 1,
                    price: 450,
                    images: ["https://rukminim1.flixcart.com/image/416/416/kirr24w0/computer/x/t/w/dell-na-thin-and-light-laptop-original-imafyhm53umy7d4d.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/k/c/5/xps-9305-notebook-dell-original-imag3nzeyqfcsw3v.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/y/x/h/xps-9305-notebook-dell-original-imag3nzemwhaywah.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/n/n/u/xps-9305-notebook-dell-original-imag3nzefmgybwej.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/h/3/x/xps-9305-notebook-dell-original-imag3nzeasggy4jk.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/t/j/6/xps-9305-notebook-dell-original-imag3nzeejyx8uwd.jpeg?q=70"],
                },
                {
                    id: 2,
                    name: "mouse",
                    qty: 1,
                    price: 750,
                    images: ["https://rukminim1.flixcart.com/image/416/416/kirr24w0/computer/x/t/w/dell-na-thin-and-light-laptop-original-imafyhm53umy7d4d.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/k/c/5/xps-9305-notebook-dell-original-imag3nzeyqfcsw3v.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/y/x/h/xps-9305-notebook-dell-original-imag3nzemwhaywah.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/n/n/u/xps-9305-notebook-dell-original-imag3nzefmgybwej.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/h/3/x/xps-9305-notebook-dell-original-imag3nzeasggy4jk.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/t/j/6/xps-9305-notebook-dell-original-imag3nzeejyx8uwd.jpeg?q=70"],
                },
            ]
        },
        {
            id: 2,
            status: "delivered",
            paid: true,
            products: [
                {
                    id: 3,
                    name: "mobile",
                    qty: 2,
                    price: 12750,
                    images: ["https://rukminim1.flixcart.com/image/416/416/kirr24w0/computer/x/t/w/dell-na-thin-and-light-laptop-original-imafyhm53umy7d4d.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/k/c/5/xps-9305-notebook-dell-original-imag3nzeyqfcsw3v.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/y/x/h/xps-9305-notebook-dell-original-imag3nzemwhaywah.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/n/n/u/xps-9305-notebook-dell-original-imag3nzefmgybwej.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/h/3/x/xps-9305-notebook-dell-original-imag3nzeasggy4jk.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/t/j/6/xps-9305-notebook-dell-original-imag3nzeejyx8uwd.jpeg?q=70"],
                },
            ]
        }
    ]

    const content = userOrders.map((item, i) => <tr key={item.id}>
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