import React from 'react'
import { ProfileCard } from '../index'

const Settings = () => {
    return <div className='container'>
        <div className="row">
            <div className="col-sm-8"> <ProfileCard /> </div>
            <div className="col-sm-4"> <RightColumn /> </div>
        </div>

    </div>
}

const RightColumn = () => {
    const userSettings = [
        { icon: "phone", name: "sms", val: true },
        { icon: "envelope", name: "email", val: false },
        { icon: "newspaper", name: "news", val: true },
        { icon: "megaphone", name: "offers", val: false },
    ]
    const content = userSettings.map(item => <li class="list-group-item d-flex justify-content-between">
        <span className='d-flex gap-3'>
            <i className={`bi bi-${item.icon}`}></i>
            {item.name.toUpperCase()}
        </span>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" checked={item.val} />
        </div>
    </li>)
    return <>
        <ul class="list-group">
            {content}
            <li class="list-group-item  border border-danger border-2">
                <p className='text-danger'>Danger Zone</p>
                <button type="button" class="btn w-100 btn-outline-danger">Delete My Account</button>

            </li>
        </ul>
    </>
}

export default Settings