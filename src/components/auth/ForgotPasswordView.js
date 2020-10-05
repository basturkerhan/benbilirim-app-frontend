import React from 'react'
import { useInput } from "../../hooks/useInput"
import { client } from "../../helpers/httpHelpers"
import alertify from "alertifyjs"

function ResetPassword({ changeToLogin }) {
    const [inputs, setInputs] = useInput({ email: "", hasError: false, errorMessage: "" })

    const onUserClick = (e) => {
        e.preventDefault()
        const body = {
            email: inputs.email
        }
        alertify.success("Demo sürümünde şifre sfırlama devre dışı bırakılmıştır. ForgotPasswordView dosyasındaki yorum satırını kaldırarak açabilirsiniz.")

        // client("auth/forgotpassword", { body })
        //     .then(data => {
        //         if (!data.status) {
        //             alertify.error(data.message)
        //             return
        //         }
        //         alertify.success(data.message)
        //     })
    }

    return (
        <div>
            <form onSubmit={onUserClick}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" className="form-control" placeholder="Email adresi" onChange={setInputs} />
                </div>
                <button type="submit" className="btn btn-success btn-lg btn-block">Sıfırlama Maili Gönder</button>
            </form>
            <p className="authFooterMsg"
                onClick={changeToLogin}><b>Şifreni hatırlıyor musun? O zaman giriş yap</b></p>
        </div>
    )
}

export default ResetPassword