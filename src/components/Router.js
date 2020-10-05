import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainApp from "./MainApp"
import { client } from "../helpers/httpHelpers"
import { VideoContext } from '../context/VideoContext';
import ApplicationPageHeader from './header/ApplicationHeader';
import { UserPointProvider } from "../context/UserPointContext"
import About from "../components/pages/About"
import Ranking from './pages/Ranking';
import AdminPageIndex from './adminPages/AdminPageIndex';

function Router({ user }) {
    const { setAvaibleVideos, setIsLoaded } = useContext(VideoContext);
    useEffect(() => {

        client("videos")
            .then((videos) => {
                setAvaibleVideos(videos.data.filter((video) => !video.usersWatching.includes(user._id)));
                setIsLoaded(true)
            })
    }, [setAvaibleVideos, setIsLoaded, user])

    return (
        <BrowserRouter>
            <UserPointProvider>
                <ApplicationPageHeader user={user}>
                    <Switch>
                        <Route exact path="/" component={MainApp} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/rank" component={Ranking} />
                        <Route exact path="/admin" component={AdminPageIndex} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </ApplicationPageHeader>
            </UserPointProvider>
        </BrowserRouter>
    )
}
export default Router