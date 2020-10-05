import React, { useContext } from "react"
import { client } from "../../helpers/httpHelpers"
import alertify from "alertifyjs"
import { UserPointContext } from "../../context/UserPointContext"
import { VideoContext } from '../../context/VideoContext'

export default function SelectButton({ video, setShowButtons, player, count }) {

    const { setUserPoint } = useContext(UserPointContext)
    const { avaibleVideos, isLoaded } = useContext(VideoContext)

    const onClickHandler = async (e) => {
        e.preventDefault()
        const body = {
            isGoal: e.target.value === "true",
            count: count
        }
        setShowButtons(false)
        try {
            const data = await client(`videos/${video._id}/watch`, { body })
            avaibleVideos.splice(0, 1)
            alertify.success(data.message)
            setUserPoint(data.user.point)
            player.current.actions.play()
        } catch (err) {
            alertify.error(err.message)
        }
    }

    return (
        <div className="select btn-group">
            <button onClick={onClickHandler} value={false} type="button" class="btn btn-light btn-lg">Gol Değildir</button>
            <button onClick={onClickHandler} value={true} type="button" class="btn btn-light btn-lg">Gol Olmuştur</button>
        </div>
    )
}