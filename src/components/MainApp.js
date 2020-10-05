import React, { useState, useEffect, useContext } from 'react'
import { VideoContext } from '../context/VideoContext'
import AllVideosWatched from './video/AllVideosWatched'
import Loading from './video/Loading'
import Video from "./video/Video"

function MainApp() {
    const { avaibleVideos, isLoaded } = useContext(VideoContext)
    const [currentVideo, setCurrentVideo] = useState()

    useEffect(() => {
        if (isLoaded) {
            setCurrentVideo(avaibleVideos[0])
        }
    }, [avaibleVideos, isLoaded])

    const changeCurrentVideo = () => {
        if (isLoaded) {
            setCurrentVideo(avaibleVideos[0])
        }
    }

    return (
        <div className="container mt-2">
            {currentVideo ? <Video video={currentVideo} changeCurrentVideo={changeCurrentVideo} />
                : avaibleVideos.length === 0 ? <AllVideosWatched /> : <Loading />}
        </div>
    )
}

export default MainApp