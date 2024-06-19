import { useState } from "react"
import DropdownCell from "../utils/DropdownCell"
import SimpleEditableTextCell from "../utils/SimpleEditableTextCell"

export default function Profile() {
    const [name, setName] = useState("TickTock")
    const [role, setRole] = useState("Medtech")
    const allRoles = ["Cop", "Corporate", "Fixer", "Media", "Netrunner", "Nomad", "Rockerboy", "Solo", "Techie"]

    return <>
    <h4>Name:</h4>
    <SimpleEditableTextCell startText={name} setText={setName}/>
    <h4>Role:</h4>
    <DropdownCell currentItem={role} itemSetter={setRole} optionsList={allRoles}></DropdownCell>
    </>
}