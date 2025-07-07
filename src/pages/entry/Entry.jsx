import React from 'react';
import './entry.style.css';
import JumbotronComponent from '../../Components/Jumbotron/JumbotronComponent';
import Login from '../../Components/Login/Login';
import { useState } from 'react';

const Entry = () => {

     const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    });

    const handleEvent = (e) => {
        const { name, value } = e.target;
        setLoginDetails(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!loginDetails.email || !loginDetails.password) {
            return alert("Please fill in all fields");
        }
    }
    return (
        <div className="entry-page bg-info">
            <JumbotronComponent>
                <Login handleEvent={handleEvent} handleSubmit={handleSubmit}loginDetails={loginDetails}/>
            </JumbotronComponent>
        </div>
    )
}

export default Entry
