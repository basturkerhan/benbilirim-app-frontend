import React, { useState } from 'react'
import LoginView from "./LoginView"
import SignupView from "./SignupView"
import ResetPasswordView from "./ForgotPasswordView"
import InfoView from "./InfoView"

function AuthIndex() {
    const [auth, setAuth] = useState("LOGIN")
    const changeToLogin = () => setAuth("LOGIN")
    const changeToSignup = () => setAuth("SIGNUP")
    const changeToForgotPassword = () => setAuth("FORGOTPASSWORD")

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div>
                        {
                            auth === "LOGIN" ?
                                <LoginView
                                    changeToSignup={changeToSignup} changeToForgotPassword={changeToForgotPassword}
                                /> :
                                auth === "FORGOTPASSWORD" ?
                                    <ResetPasswordView
                                        changeToLogin={changeToLogin}
                                    /> :
                                    <SignupView
                                        changeToLogin={changeToLogin}
                                    />
                        }
                    </div>
                </div>

                <div className="col-md-6">
                    <InfoView />
                </div>
            </div>
        </div>
    )
}

export default AuthIndex