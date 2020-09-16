import React from 'react'
import "./Moles.css"
import Fella from './mole-fella.png'

function Mole({onClick}) {
    return (
        <button onClick={onClick}>
            <img className="mole-img" src={Fella} alt="Mole" />
        </button>
    )
}

export default Mole
