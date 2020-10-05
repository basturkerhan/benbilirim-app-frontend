import React, { useState } from 'react'
import { uploadImage } from "../../helpers/httpHelpers"
import { client } from "../../helpers/httpHelpers"
import alertify from "alertifyjs"

export default function () {

    const [file, setFile] = useState(null)
    const [isGoal, setIsGoal] = useState(false)
    const [waitTime, setWaitTime] = useState(0.0)

    const onSubmitEvent = (e) => {
        e.preventDefault()
        uploadImage(file).then(async (res) => {
            const body = {
                path: res.public_id,
                isGoal: isGoal,
                waitTime: parseFloat(waitTime)
            }
            try {
                const data = await client("videos/add", { body });
                if (!data.status) {
                    alertify.error(data.message)
                    return
                }
                alertify.success("Video Başarıyla Eklendi")
            } catch (err) {
                alertify.error(err.message)
            }
        })
    }

    const onChangeEvent = (e) => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            setFile(e.target.files[0])
        }
    };

    return (
        <div>
            <form onSubmit={onSubmitEvent}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="video kaçıncı saniyede duracak?" onChange={(e) => setWaitTime(e.target.value)} />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" className="form-check-input" onChange={e => setIsGoal(e.target.checked)} />
                    <label className="form-check-label" >Pozisyon gol mü?</label>
                </div>
                <div class="form-group">
                    <input type="file" name="file" onChange={onChangeEvent} />
                </div>
                <button type="submit" className="btn btn-success">Videoyu Kaydet</button>
            </form>
        </div>
    )
}