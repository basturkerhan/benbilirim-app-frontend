import alertify from 'alertifyjs';
import React, { useState, useEffect, useContext } from 'react';
import SelectButton from "../../buttons/SelectButton"
import { VideoContext } from '../../../context/VideoContext'

export default function Counter({ video, player, setShowButtons }) {
  const [count, setCount] = useState(8)
  const { avaibleVideos, isLoaded } = useContext(VideoContext)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0)
        setCount(count - 1)
      else {
        setShowButtons(false)
        alertify.error("Maalesef zamanında cevap veremedin")
        avaibleVideos.splice(0, 1)
        player.current.actions.play()
        clearInterval(interval)
      }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [count])


  return (
    <div className="counter-area">
      <h1 className="counter"><span className="badge badge-danger">{count}</span></h1>
      <SelectButton video={video} setShowButtons={setShowButtons} player={player} count={count} />
    </div>
  )
}