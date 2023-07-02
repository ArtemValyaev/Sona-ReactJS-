import React from "react"
import Breadcrumb from "../components/Breadcrumb"
import RoomsList from "../components/RoomsList"


class Rooms extends React.Component {
    render() {
        return(<>
            <Breadcrumb path='/rooms'/>
            <RoomsList/>
        </>
    )
    }
}

export default Rooms