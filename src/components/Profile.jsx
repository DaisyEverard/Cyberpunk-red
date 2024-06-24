import { useContext, useState } from "react"
import { HPContext, RoleContext, StatsContext } from "../App"

import "../style/profile.css"

import rolesJson from "../data/roles.json"

import DropdownCell from "../utils/DropdownCell"
import SimpleEditableTextCell from "../utils/SimpleEditableTextCell"




export default function Profile() {
    const [name, setName] = useState("Name")
    const {role, setRole} = useContext(RoleContext)
    const {HP} = useContext(HPContext)

    const allRoles = Object.keys(rolesJson)

    return <div id="profile">
        <div className="flexRow">
    <h4>Name:</h4>
    <SimpleEditableTextCell startText={name} setText={setName}/>
    <h4>Role:</h4>
    <DropdownCell currentItem={role} itemSetter={setRole} optionsList={allRoles}></DropdownCell>
    </div>
    <div className="flexRow">
        <p>HP: {HP}</p>
    </div>
    </div>
}