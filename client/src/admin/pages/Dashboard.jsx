

const Dashboard = () => {
    const x = { name: "john", age: 55 }
    // const k = "helloooo"
    // x[k] = "dummy"
    console.log(x);

    const stat = [
        { users: 50 },
        { "Active Users": 45 },
        { order: 265 },
        { delivered: 200 },
        { dispatch: 70 },
    ]

    const content = stat.map(item => {
        return <div className="col-sm-4 my-3">

            <div class="card">
                <div class="card-body">
                    <h1>{Object.keys(item)}</h1>
                    <h1>{item[Object.keys(item)[0]]}</h1>
                </div>
            </div>
        </div>

    })

    return <>
        <div className="container">
            <div className="row">
                {content}
            </div>
        </div>
    </>
}

export default Dashboard