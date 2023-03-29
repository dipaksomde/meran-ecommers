import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateProfile } from "../../redux/user/userActions"

const ProfileCard = () => {
    const { info } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [profile, setProfile] = useState({
        name: info.name || "",
        email: info.email || "",
        mobile: info.mobile || "",
        address: {
            house: info?.address?.house || "",
            street: info?.address?.street || "",
            city: info?.address?.city || "",
            pin: info?.address?.pin || ""
        },
        active: true

    })
    const content = []
    for (const [key, val] of Object.entries(profile)) {

        if (typeof val === "object") {
            for (const [addressKey, addressVal] of Object.entries(val)) {
                if (addressVal === "") {
                    content.push(<>
                        <li class="list-group-item d-flex justify-content-between">
                            <p>{addressKey}</p>
                            <input type="text" onBlur={e => setProfile({
                                ...profile,
                                address: {
                                    ...profile.address, [addressKey]: e.target.value
                                }
                            })} />
                        </li>
                    </>)
                } else {
                    content.push(<>
                        <li class="list-group-item d-flex justify-content-between">
                            <p>{addressKey}</p>
                            <p>{addressVal}</p>
                        </li>
                    </>)
                }
            }
        } else {
            if (val === "") {
                content.push(<>
                    <li class="list-group-item d-flex justify-content-between">
                        <p>{key}</p>
                        <input type="text" onBlur={e => setProfile({
                            ...profile, [key]: e.target.value
                        })} />
                    </li>
                </>)
            } else {
                content.push(<>
                    <li class="list-group-item d-flex justify-content-between">
                        <p>{key}</p>
                        <p>{val}</p>
                    </li>
                </>)
            }

        }
    }

    const handleUpdateProfile = () => {
        dispatch(updateProfile({ ...profile, id: info.id }))
    }
    return <>
        {JSON.stringify(profile)}
        <div class="card">
            <div class="card-header">{profile.name}'s Profile</div>
            <div class="card-body">
                <ul class="list-group">
                    {content}
                </ul>
                <button
                    type="button"
                    onClick={handleUpdateProfile}
                    class="btn btn-primary w-100 my-3">
                    Update Profile
                </button>
            </div>
        </div>
    </>
}

export default ProfileCard