import React,{useState} from "react"
import alertify from "alertifyjs"
import { client } from "../../helpers/httpHelpers"
import { useParams } from "react-router"
export default function () {

    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const params = useParams()

    const onSubmitEvent = async(e)=>{
        e.preventDefault()
        if(password===rePassword){
            if( password!=="" && rePassword!=="" ){
                const body = {
                    password: password
                }
                const data = await client(`auth/resetpassword?resetPasswordToken=${params.resetPasswordToken}`, {body})
                if(data.status){
                    alertify.success(data.message)
                }else{
                    alertify.error(data.message)
                }
            }else{
                alertify.error("Şifre ve şifre tekrarı alanları boş bırakılamaz")
            }        
        } else{
            alertify.error("Şifre ve şifre tekrarı alanları aynı olmalıdır")
        }
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={onSubmitEvent}>
                        <div className="form-group">
                            <label for="password">Yeni Şifre</label>
                            <input type="password" className="form-control" onChange={e=>setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label for="repassword">Yeni Şifre Tekrarı</label>
                            <input type="password" className="form-control" onChange={e=>setRePassword(e.target.value)}/>
                        </div>
                        <button type="submit" class="btn btn-primary">Şifreyi Kaydet</button>
                    </form>
                </div>
            </div>
        </div>
    )
}