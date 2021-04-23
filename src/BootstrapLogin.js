import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

export default function BootstrapLogin() {
    let error = ''
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    // const [ registerSuccess, setRegisterSuccess ] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        if (email === "" || password === "") {
            return alert('no email or password entered')
        }

        const user = { email, password }

        axios.post('/login', user)
            .then(response => {
                if(response.data.login === 'success') {
                    alert('success')
                    // setRegisterSuccess(true)
                } else if (response.data.login === 'failed') {
                    alert('failed to authenticate')
                    // setRegisterSuccess(false)
                }
            })
    }

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    return (
        <div className="bootstrap-container">
            <h1 className="smile-text-header">Smile.</h1>
            Login:
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleEmailChange}/>
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handlePasswordChange}/>
                    <small id="passwordHelp" className="form-text text-muted">Must be over 6 char</small>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <Link to="/register">
                    <p className="register-login-link">Not a member? click here to register!</p>
                </Link>
            </form>
        </div>
        )
}
