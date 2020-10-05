import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import AuthPageHeader from './header/AuthPageHeader'
import AuthIndex from "../components/auth/AuthIndex"
import ResetPassword from "./auth/ResetPasswordView"

function AuthRouter() {
    return (
        <BrowserRouter>
            <AuthPageHeader>
                <Switch>
                    <Route exact path="/" component={AuthIndex} />
                    <Route
                        exact
                        path={`/resetpassword/:resetPasswordToken`}
                        component={ResetPassword}
                    />
                    <Redirect from="*" to="/" />
                </Switch>
            </AuthPageHeader>
        </BrowserRouter>
    )
}
export default AuthRouter