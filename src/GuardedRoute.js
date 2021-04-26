import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const GuardedRoute = ({ component: Component, ...rest }) => {

    const [ authorized, setAuthorized ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ userId, setUserId ] = useState(null)

    useEffect(() => {

      axios.get('/protected-route')
              .then(response => {
                  if(response.data.authorized === true) {
                      console.log('success')
                      setUserId(response.data.userId)
                      setAuthorized(true)
                  } else if (response.data.authorized === false) {
                      console.log('you do not have permission to view this resource')
                      setAuthorized(false)
                  }
                  setLoading(false)
              })
            }, [ authorized ])

    return (
        <div>
            {loading    
                ? <div>loading</div> 
                : authorized 
                    ? <Route {...rest} render={(...props) => <Component {...props} userId={userId} />}></Route>
                    : <Redirect to='/login'/>
            }
        </div>
    )
}

export default GuardedRoute;