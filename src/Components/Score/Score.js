import React from 'react'
import "./Score.css"

function Score({score, highScore}) {
    return (
        <div className="score">
            <div>
                Current score: {score}
            </div>
            <div>
                High score: {highScore}
            </div>
        </div>
    )
}

export default Score
