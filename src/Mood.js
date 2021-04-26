import MoodForm from './MoodForm';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default function Mood({ userId }) {
    // const [ moodSelection , setMoodSelection ] = useState(null)
    // const [ activities , setActivities ] = useState([])
    const [ redirectBool, setRedirectBool ] = useState(false)
    const [ loading, setLoading ] = useState(true)

    function handleFormChanges(activities, moodSelection) {
        // setMoodSelection(moodSelection)
        // setActivities(activities)

        const todaysDate = new Date()
        const todaysDateConverted = todaysDate.toLocaleDateString('en-US')

        const mood = { userId, todaysDateConverted, moodSelection, activities }

        console.log(mood)

        axios.post('/mood', mood)
            .then(response => {
                if (response.data.message === 'success') {
                    setRedirectBool(true)
                } else if (response.data.message === 'failed') {
                    console.log('failed')
                }
        })
    }

    useEffect(() => {

        const todaysDate = new Date()
        const todaysDateConverted = todaysDate.toLocaleDateString('en-US')

        const request = { userId, todaysDateConverted }

        axios.post('/verify-mood', request )
            .then(response => {
                if (response.data.message === 'success') {
                    setRedirectBool(true)
                } else if (response.data.message === 'failed') {
                    setLoading(false)
                }
            })
    })

    return (
        <div>
            {loading
                ? <div>"loading"</div>
                : <MoodForm onFormChange={handleFormChanges}/>
            }
            {redirectBool && <Redirect to='/dashboard'/>}
        </div>
    )
}