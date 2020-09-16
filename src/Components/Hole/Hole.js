import React from 'react'
import "./Hole.css"

function Hole(props) {
    return (
        <div className="hole">
            {props.children}
        </div>
    )
}

export default Hole
