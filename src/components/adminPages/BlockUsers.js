import alertify from "alertifyjs"
import React,{ useState } from "react"
import { client } from "../../helpers/httpHelpers"

export default function () {
    const [email, setEmail] = useState("")

    const onClickHandler = async(e)=>{
        e.preventDefault()
        const body = {
            email
        }
        const data = await client("admin/block",{body})
        if(data.status){
            alertify.success(data.message)
        }else{
            alertify.error(data.message)
        }
    }

    return (
        <div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Kullanıcı email adresi</span>
                </div>
                <input type="email" className="form-control" onChange={e=>setEmail(e.target.value)}/>
            </div>
            <button type="button" className="btn btn-success btn-block" onClick={onClickHandler}>Blokla</button>
        </div>
    )
}