import React from 'react'
import './jumbotron.style.css'
const JumbotronComponent = (props) => {
    return (
        <div className="jumbotron">
            {props.children}
        </div>
    )
}

export default JumbotronComponent
