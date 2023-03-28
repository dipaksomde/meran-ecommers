import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userRegister } from '../../redux/public/publicAction'

const Rigster = () => {
    const dispath = useDispatch()
    const [registerData, setRegisterData] = useState({
        name: "john",
        email: "john@gmail.com",
        password: "123",
        cpassword: "123"
    })
    const handleRegister = () => {
        dispath(userRegister(registerData))
    }

    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <button type="button" class="btn btn-primary w-100 my-3 btn-lg">Continue With Google</button>
                    <div className="card">
                        <div className="card-header">Signup</div>
                        <div className="card-body">
                            <div>
                                <label for="name" className="form-label">First name</label>
                                <input
                                    onChange={e => setRegisterData({ ...registerData, name: e.target.value })}
                                    value={registerData.name}
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="mt-2">
                                <label for="email" className="form-label">First Email</label>
                                <input
                                    onChange={e => setRegisterData({ ...registerData, email: e.target.value })}
                                    value={registerData.email}
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="mt-2">
                                <label for="password" className="form-label">Password</label>
                                <input
                                    onChange={e => setRegisterData({ ...registerData, password: e.target.value })}
                                    value={registerData.password}
                                    type="text"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Your Password"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a password.</div>
                            </div>
                            <div className="mt-2">
                                <label for="cpassword" className="form-label"
                                >Confirm Password</label
                                >
                                <input
                                    onChange={e => setRegisterData({ ...registerData, cpassword: e.target.value })}
                                    value={registerData.cpassword}
                                    type="text"
                                    className="form-control"
                                    id="cpassword"
                                    placeholder="Confirm Your Password"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">
                                    Please Recheck Your Password.
                                </div>
                            </div>
                            <button onClick={handleRegister} type="button" className="btn btn-primary w-100 mt-3">
                                Signup
                            </button>
                            <p className="text-center mt-3">
                                Already Have Account? <a href="#">Login</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Rigster