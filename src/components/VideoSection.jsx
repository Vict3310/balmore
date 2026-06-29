import React from 'react'
import './VideoSection.css'
import heroVideo from '../assets/mobileland_files/e9774d0a060846bea5942e5fbf8d9114.HD-1080p-7.2Mbps-81327041.mp4'

const VideoSection = () => {
    return (
        <section className="video-section">
            <video
                className="video-bg"
                src={heroVideo}
                muted
                autoPlay
                loop
                playsInline
            />
        </section>
    )
}

export default VideoSection
