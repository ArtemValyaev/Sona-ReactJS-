import React from "react"
import Breadcrumb from "../components/Breadcrumb"
import BlogBegin from "../components/BlogBegin"

class Blog extends React.Component {
    render() {
        return(<>
            <Breadcrumb path="/blog"/>
            <BlogBegin />
            
        </>
    )
    }
}

export default Blog