import { useState } from "react"

const ProfileCard = () => {
    const [profile, setProfile] = useState({
        name: "John",
        email: "john@gmail.com",
        mobile: "898989889",
        address: {
            house: "fake house",
            street: "fake street",
            city: "london",
            pin: 431005
        },
        active: true

    })
    const content = []
    for (const [key, val] of Object.entries(profile)) {

        if (typeof val === "object") {
            for (const [addressKey, addressVal] of Object.entries(val)) {
                content.push(<>
                    <li class="list-group-item d-flex justify-content-between">
                        <p>{addressKey}</p>
                        <p>{addressVal}</p>
                    </li>
                </>)
            }
        } else {
            content.push(<>
                <li class="list-group-item d-flex justify-content-between">
                    <p>{key}</p>
                    <p>{val}</p>
                </li>
            </>)

        }
    }
    return <>
        <div class="card">
            <div class="card-header">{profile.name}'s Profile</div>
            <div class="card-body">
                <ul class="list-group">
                    {content}
                </ul>
            </div>
        </div>
    </>
}

export default ProfileCard