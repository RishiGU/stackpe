import React, { useEffect } from 'react';
import {useHistory } from "react-router-dom"
import firebase from '../config/firebase'
import {updateAuth,getAuth} from '../redux/store';


function LogedinPage() {
    const history = useHistory();
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user === null) {
                history.push("/");
                return;
            }
            updateAuth(user)
        })
    }, [])
    return (
        <div>
            user is logedin here 😎😎
        </div>
    )
}

export default LogedinPage
