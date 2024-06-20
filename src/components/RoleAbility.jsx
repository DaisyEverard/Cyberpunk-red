import { useContext } from "react"
import { RoleContext } from "../App"

import "../style/roleAbility.css"

import rolesJson from "../data/roles.json"



export default function RoleAbility() {
    const {role, setRole} = useContext(RoleContext)
    const abilityObject = rolesJson[role]
    console.log(abilityObject)
    // console.log(rolesJson.role)

    return (
        <div id="roleAbility" className="flexRow">
            <table>
            <thead>
                <tr>
                <th>Ability</th>
                <th>Level</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th>Skill Name</th>
                <td>Level</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}