import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import "alertifyjs/build/css/alertify.min.css"
import "video-react/dist/video-react.css"
import "video-react/styles/scss/video-react.scss"
import App from './components/App';
import * as serviceWorker from './serviceWorker'
import { UserProvider } from "./context/UserContext"
import { VideoProvider } from "./context/VideoContext"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <VideoProvider>
          <App />
        </VideoProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
