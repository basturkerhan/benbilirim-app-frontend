import React from 'react'

export default function AllVideosWatched() {
    return (
        <div className="mt-5">
            <p className="lead text-center">Tüm videoları izledin! Yeni videolar için arada bir ziyaret et!</p>
            <div className="progress">
                <div className="progress-bar" style={{ width: "100%" }} >100%</div>
            </div>
        </div>
    )
}
