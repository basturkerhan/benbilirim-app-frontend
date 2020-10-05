import alertify from "alertifyjs"
import React,{ useState } from "react"
import { client } from "../../helpers/httpHelpers"

export default function () {
    const [videoId, setVideoId] = useState("")

    const onClickHandler = async(e)=>{
        e.preventDefault()
        const data = await client(`videos/${videoId}/delete`)
        if(data.status){
            alertify.success(data.message)
        }else{
            alertify.error(data.message)
        }
    }

    return (
        <div className="mt-5">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Video Id Bilgisi</span>
                </div>
                <input type="text" className="form-control" onChange={e=>setVideoId(e.target.value)}/>
            </div>
            <button type="button" className="btn btn-success btn-block" onClick={onClickHandler}>Videoyu Sil</button>
        </div>
    )
}