import React, { useState, createContext } from "react";

export const VideoContext = createContext(null);

export const VideoProvider = ({ children }) => {

    const [avaibleVideos, setAvaibleVideos] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <VideoContext.Provider value={{ avaibleVideos, setAvaibleVideos, isLoaded, setIsLoaded }}>
            {children}
        </VideoContext.Provider>
    );
};

export default VideoProvider;