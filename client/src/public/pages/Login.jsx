import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/user/userActions'

const Login = () => {
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(login({ email: "john@gmail.com", password: "123" }))
    }
    return <div class="container">
        <div class="row">
            <div class="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <div>
                            <label for="email" class="form-label">First Email</label>
                            <input
                                type="text"
                                class="form-control"
                                id="email"
                                placeholder="Enter Your Email"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                        <div class="mt-2">
                            <label for="password" class="form-label">Password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="password"
                                placeholder="Enter Your Password"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                        <button onClick={handleLogin} type="button" class="btn btn-primary w-100 mt-3">
                            Login
                        </button>
                        <p class="text-center mt-3">
                            Dont Have Account? <a href="#">Create Account</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login