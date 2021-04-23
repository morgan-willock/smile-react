import { useState } from 'react'
import axios from 'axios'

export default function Register() {
    let error = ''
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ registerSuccess, setRegisterSuccess ] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        if (email === "" || password === "") {
            return alert('no email or password entered')
        }

        const user = { email, password }

        axios.post('/register', user)
            .then(response => {
                if(response.data.register === 'success') {
                    alert('success')
                    setRegisterSuccess(true)
                } else if (response.data.register === 'failed') {
                    alert('email aleady taken')
                    setRegisterSuccess(false)
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
        <div>
            <h1>Smile.</h1>
            Register:
            <br/>
            <br/>
            <form onSubmit={handleSubmit}>
                Email: <input type="email" onChange={handleEmailChange}/>
                <br/>
                <br/>
                Password: <input type="text" onChange={handlePasswordChange}/>
                <p>{registerSuccess}</p>
                <br/>
                <br/>
                <button>submit</button>
            </form>
            {/* <Redirect /> */}
        </div>
        )
}