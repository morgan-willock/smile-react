import { useState } from 'react'
import axios from 'axios'

export default function Login() {
    let error = ''
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ registerSuccess, setRegisterSuccess ] = useState(false)

    function handleSubmit(e) {
        alert('form was submitted')
        e.preventDefault()

        const uname = email
        const pw = password
        const user = { uname, pw }

        axios.post('http://localhost:8080/register', user)
            .then(response => {
                alert(response.data.register)
                if(response.data.register === 'success') {
                    alert('change state')
                    setRegisterSuccess(true)
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
                <br/>
                <br/>
                <button>submit</button>
            </form>
            {/* <Redirect /> */}
        </div>
        )
}