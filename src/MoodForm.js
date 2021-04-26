import { useState, useEffect } from 'react';

export default function MoodForm(props) {

    const [ moodSelection , setMoodSelection ] = useState(null)
    const [ activities , setActivities ] = useState([])

    function handleMoodSelection(e) {
        setMoodSelection(e.target.id)
    }

    function handleActivitySelection(e) {
        let activitiesFiltered = null

        if (activities.includes(e.target.value)) {
            activitiesFiltered = activities.filter(activity => {
                return activity !== e.target.value
            })
            setActivities(activitiesFiltered)
        } else {
            setActivities([...activities, e.target.value])
        }
    }

    function handleSubmit() {
        props.onFormChange(activities, moodSelection)
    }

    return (
        <div>
            <h2>How are you feeling today?</h2>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label onClick={handleMoodSelection} className="btn btn-outline-primary btn-toggle" id="1">
                        <input type="radio" name="options" id="option1" autoComplete="off" /> 1
                    </label>
                    <label onClick={handleMoodSelection} className="btn btn-outline-primary btn-toggle" id="2">
                        <input type="radio" name="options" id="option2" autoComplete="off" /> 2
                    </label>
                    <label onClick={handleMoodSelection} className="btn btn-outline-primary btn-toggle" id="3">
                        <input type="radio" name="options" id="option3" autoComplete="off" /> 3
                    </label>
                    <label onClick={handleMoodSelection} className="btn btn-outline-primary btn-toggle" id="4">
                        <input type="radio" name="options" id="option4" autoComplete="off" /> 4
                    </label>
                    <label onClick={handleMoodSelection} className="btn btn-outline-primary btn-toggle" id="5">
                        <input type="radio" name="options" id="option5" autoComplete="off" /> 5
                    </label>
                </div>
                <div className="form-check" onClick={handleActivitySelection}>
                    <input className="form-check-input" type="checkbox" value="walking" id="flexCheckWalking"></input>
                    <label className="form-check-label" htmlFor="flexCheckWalking">
                        Walking
                    </label>
                </div>
                <div className="form-check" onClick={handleActivitySelection}>
                    <input className="form-check-input" type="checkbox" value="relaxing" id="flexCheckRelaxing"></input>
                    <label className="form-check-label" htmlFor="flexCheckRelaxing">
                        Relaxing
                    </label>
                </div>
                <div className="form-check" onClick={handleActivitySelection}>
                    <input className="form-check-input" type="checkbox" value="socialising" id="flexCheckSocialising"></input>
                    <label className="form-check-label" htmlFor="flexCheckSocialising">
                        Socialising
                    </label>
                </div>
                <button type="button" onClick={handleSubmit} className="btn btn-primary">Enter</button>
        </div>
    )
}