import React from 'react'
import "./Moles.css"

function Mole({ mole , index , ...props}) {
    return (
        <div className={`mole ${mole.isVisible ? "visible" : ""}`}>
            {mole.text}
        </div>
    )
}

export default Mole
