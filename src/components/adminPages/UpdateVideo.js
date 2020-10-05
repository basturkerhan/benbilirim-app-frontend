import alertify from "alertifyjs"
import React, { useState } from "react"
import { client } from "../../helpers/httpHelpers"

export default function () {
    const [videoId, setVideoId] = useState("")
    const [isGoal, setIsGoal] = useState(false)
    const [waitTime, setWaitTime] = useState(0.0)

    const onSubmitEvent = async (e) => {
        e.preventDefault()
        const body = {
            isGoal,
            waitTime
        }
        const data = await client(`videos/${videoId}/edit`, { body })
        if (data.status) {
            alertify.success(data.message)
        } else {
            alertify.error(data.message)
        }
    }

    return (
        <div className="mt-5">
            <form onSubmit={onSubmitEvent}>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Video ID</span>
                    </div>
                    <input type="text" className="form-control" onChange={e => setVideoId(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="video kaçıncı saniyede duracak?" onChange={(e) => setWaitTime(e.target.value)} />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" className="form-check-input" onChange={e => setIsGoal(e.target.checked)} />
                    <label className="form-check-label" >Pozisyon gol mü?</label>
                </div>
                <button type="submit" className="btn btn-success">Videoyu Güncelle</button>
            </form>
        </div>
    )
}