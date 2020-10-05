import React from 'react'

export default function NextButton({ changeCurrentVideo }) {
    return (
        <div>
            <img src="images/right-arrow.png" className="next-icon" alt="next" onClick={changeCurrentVideo} />
        </div>
    )
}
