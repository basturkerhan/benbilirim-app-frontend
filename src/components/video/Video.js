import React, { useState, useEffect } from 'react'
import { Player, Shortcut, ControlBar } from 'video-react'
import NextButton from '../buttons/NextButton'
import Counter from './counter/Counter'
import cnfg from "../../helpers/config"
import shortcut from "./shortcut"

export default function Video({ video, changeCurrentVideo }) {

  const path = `${cnfg.cloudinaryVideosURL}/${video.path}.mp4`
  const [player] = useState(React.createRef())
  const [showButtons, setShowButtons] = useState(false)
  const [canRun, setCanRun] = useState(true)
  const [showNext, setShowNext] = useState(false)

  useEffect(() => {
    setShowButtons(false)
    setShowNext(false)
    setCanRun(true)
  }, [video])

  useEffect(() => {
    const interval = setInterval(() => {
      if (video.waitTime <= player.current.manager.store.getState().player.currentTime && player.current && canRun) {
        player.current.actions.pause()
        setShowButtons(true)
        setCanRun(false)
      }
      if (player.current.manager.video.getProperties().ended) {
        setShowNext(true)
        clearInterval(interval)
      }

    }, 500);
    return () => {
      clearInterval(interval)
    }
  }, [player, canRun])


  return (
    <div>
      {/* <button onClick={e=>bas(e)}>BAS</button> */}
      <div className="video">
        <Player
          vimeoConfig={{ iframeParams: { fullscreen: 0 } }}
          src={path}
          ref={player}
          autoPlay={true}
          fluid={true}
        >
          <ControlBar disableCompletely={true} className="my-class" />
          <Shortcut clickable={false} shortcuts={shortcut} />
        </Player>

        <div style={{ display: showNext ? "block" : "none" }}>
          <NextButton changeCurrentVideo={changeCurrentVideo} />
        </div>

        {showButtons ? <Counter video={video} player={player} setShowButtons={setShowButtons} /> : null}

      </div>
    </div>
  )
}




    // const bas = (e)=>{
    //   e.preventDefault()
    //   console.log( player.current.actions.pause() )
    //   setCurrentTime( (player.current.manager.video.getProperties().currentTime).toFixed(4) )
    //   console.log( player.current.manager.video.getProperties().currentTime )
    // }


    // useEffect(() => {
    //   setCurrentTime( (player.current.manager.video.getProperties().currentTime).toFixed(4) )
    //   console.log( currentTime )
    // }, [currentTime, player] )

    // useEffect(() => {
    //   if (player.current != null ){
    //     setTimeout(() => {
    //       console.log("a")
    //       console.log(player)
    //       player.current.actions.pause()
    //       console.log("b")
    //       setShowButtons(true)
    //     }, video.waitTime*1000);
    //   }
    // }, [player, video.waitTime])