import { useState } from "react"
import DropdownCell from "../utils/DropdownCell"
import SimpleEditableTextCell from "../utils/SimpleEditableTextCell"
import rolesJson from "../data/roles.json"
import useRole from "../hooks/useRole"
import "../style/profile.css"

export default function Profile() {
    const [name, setName] = useState("TickTock")
    const [role, setRole] = useRole()
    const allRoles = Object.keys(rolesJson)

    return <div id="profile" className="flexRow">
    <h4>Name:</h4>
    <SimpleEditableTextCell startText={name} setText={setName}/>
    <h4>Role:</h4>
    <DropdownCell currentItem={role} itemSetter={setRole} optionsList={allRoles}></DropdownCell>
    </div>
}