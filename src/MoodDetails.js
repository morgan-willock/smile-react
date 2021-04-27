import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MoodDetails({ date, userId }) {
    const [ moodSelection, setMoodSelection ] = useState(null)
    const [ activities, setActivities ] = useState([])
    const [ currentDate, setCurrentDate ] = useState(null)

    useEffect(() => {
        const dbFormattedDate = date.toISOString().split('T')[0]

        setCurrentDate(dbFormattedDate)

        const request = { userId, date: dbFormattedDate }
      
        axios.post('/mood-details', request)
            .then(response => {

                if(response.data.rows[0] !== undefined) {
                    let dbResponseActivities = response.data.rows[0]["activities"]
                    let dbResponseMoodSelection = response.data.rows[0]["mood_selection"]
    
                    setActivities(dbResponseActivities)
                    setMoodSelection(dbResponseMoodSelection)
                }
            })
    }, [ currentDate ])

    return (
        <div>
            <h4>mood details</h4>
            <p>{currentDate}</p>
            <p>{moodSelection}</p>
            <ul>
                {activities.map((activity, idx) => {
                    return (
                        <li key={idx}>{activity}</li>
                    )
                })}
            </ul>
            <Link to={`/mood/${currentDate}`}>
                <button type="button" className="btn btn-info">Edit</button>
            </Link>
        </div>
    )
}