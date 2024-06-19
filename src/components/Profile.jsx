import { useState } from "react"
import DropdownCell from "../utils/DropdownCell"

export default function Profile() {
    const [name, setName] = useState("TickTock")
    const [role, setRole] = useState("Medtech")
    const allRoles = ["Cop", "Corporate", "Fixer", "Media", "Netrunner", "Nomad", "Rockerboy", "Solo", "Techie"]

    return <>
    <h4>Name:</h4>
    <p>{name}</p>
    <h4>Role:</h4>
    <DropdownCell currentItem={role} itemSetter={setRole} optionsList={allRoles}></DropdownCell>
    </>
}