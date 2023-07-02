import React from "react"
import Breadcrumb from "../components/Breadcrumb"
import Video from "../components/video"
import Gallery from "../components/gallery"
import AboutBegin from "../components/AboutBegin"

class About extends React.Component {
    render() {
        return(<>
            <Breadcrumb path='/about'/>
            <AboutBegin/>
            <Video/>
            <Gallery/>
        </>
    )
    }
}

export default About