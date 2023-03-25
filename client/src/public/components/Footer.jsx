import React from 'react'

const Footer = () => {
    const links = ["Home", "Career", "Terms", "Policy"]
    const content = links.map((item, i) => <li key={item + i}>{item}</li>)
    return <div class="alert bg-white mb-0 mt-5">
        <div className="container">
            <h2>SKILLHUB</h2>
            <div className="row">
                <div className="col-sm-4">
                    <ul>{content}</ul>
                </div>
                <div className="col-sm-4">
                    <ul>{content}</ul>
                </div>
                <div className="col-sm-4">
                    <ul>{content}</ul>
                </div>
            </div>
        </div>
        <p className='text-center text-secondary'>All rights are reserved by SKILLHUB </p>
    </div>
}

export default Footer