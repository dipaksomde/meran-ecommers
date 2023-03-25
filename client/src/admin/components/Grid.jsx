import React from 'react'

const Grid = ({ col1, col2, col3 }) => {
    return <div className="container">
        <div className="row">
            <div className="col-sm-4">{col1}</div>
            <div className="col-sm-4">{col2}</div>
            <div className="col-sm-4">{col3}</div>
        </div>
    </div>
}

export default Grid