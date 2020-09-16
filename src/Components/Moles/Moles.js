import React from 'react'
import "./Moles.css"
import Fella from './mole-fella.png'

function Mole({onClick}) {
    return (
        <div className="visible">
            <img className="mole-img" src={Fella} alt="Mole" onClick={onClick} />
        </div>
    )
}

export default Mole
