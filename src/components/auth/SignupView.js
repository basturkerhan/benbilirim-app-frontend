import React from 'react'
import { client } from "../../helpers/httpHelpers"
import { useInput } from "../../hooks/useInput"
import alertify from "alertifyjs"

function SignupView({ changeToLogin }) {
    const [inputs, setInputs] = useInput({ firstName: "", lastName: "", email: "", password: "", repassword: "" })

    const onUserClick = async (e) => {
        e.preventDefault()
        if (inputs.firstName === "" || inputs.lastName === "" || inputs.email === "" || inputs.password === "" || inputs.repassword === "") {
            alertify.error("Lütfen tüm alanları doldurunuz")
            return
        }
        if (inputs.repassword !== inputs.password) {
            alertify.error("Şifre alanları birbiriyle aynı olmalıdır")
            return
        }
        const body = {
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            email: inputs.email,
            password: inputs.password
        }
        try {
            const data = await client("auth/register", { body });
            if (!data.status) {
                alertify.error(data.message)
                return
            }
            alertify.success("Kayıt işleminiz başarıyla tamamlandı")
        } catch (err) {
            alertify.error(err.message)
        }
    }

    return (
        <div>
            <form onSubmit={onUserClick}>
                <label htmlFor="name-surname">İsim - Soyisim</label>
                <div className="row form-group">
                    <div className="col">
                        <input name="firstName" onChange={setInputs} type="text" className="form-control" placeholder="İsim" />
                    </div>
                    <div className="col">
                        <input name="lastName" onChange={setInputs} type="text" className="form-control" placeholder="Soyisim" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input name="email" onChange={setInputs} type="email" className="form-control" placeholder="Email adresi" />
                </div>
                <label htmlFor="exampleInputEmail1">Şifre</label>
                <div className="row form-group">
                    <div className="col">
                        <input name="password" onChange={setInputs} type="password" className="form-control" placeholder="Şifre" />
                    </div>
                    <div className="col">
                        <input name="repassword" onChange={setInputs} type="password" className="form-control" placeholder="Şifre Tekrarı" />
                    </div>
                </div>
                <button type="submit" className="btn btn-success btn-lg btn-block">Kayıt Ol</button>
            </form>
            <p className="authFooterMsg"
                onClick={changeToLogin}><b>Zaten üye misin? O zaman giriş yap</b></p>
        </div>
    )
}

export default SignupView