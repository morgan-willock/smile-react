import { useState, useEffect } from 'react';
import axios from 'axios';
import DayPickerContainer from './DayPickerContainer';
import { Redirect } from 'react-router-dom'

export default function Dashboard() {
    const [ authorized, setAuthorized ] = useState(false)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        axios.get('/protected-route')
                .then(response => {
                    console.log(response.data.authorized)
                    if(response.data.authorized === true) {
                        console.log('success')
                        setAuthorized(true)
                    } else if (response.data.authorized === false) {
                        console.log('you do not have permission to view this resource')
                        setAuthorized(false)
                    }
                    setLoading(false)
                })
    }, [])

    return (
        <div>
            {loading    
                ? <div>loading</div> 
                : authorized 
                    ? <DayPickerContainer /> 
                    : <Redirect to="/login"/> }
            {/* {authorized 
                ? <DayPickerContainer /> 
                : <Redirect to="/login"/>
            } */}
        </div>
    )
}