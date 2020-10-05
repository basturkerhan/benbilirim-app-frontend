import React from "react"
import BlockUsers from "./BlockUsers"
import DeleteVideo from "./DeleteVideo"
import UploadVideo from "./UploadVideo"
import UpdateVideo from "./UpdateVideo"
export default function AdminPageIndex(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <UploadVideo/>
                    <UpdateVideo/>
                </div>
                <div className="col-md-6">
                    <BlockUsers/>
                    <DeleteVideo/>
                </div>
            </div>
        </div>
    )
}