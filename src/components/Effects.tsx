// When your Character falls to zero Hit Points, they enter the Death State (a measure of how fast they are dying)

// Seriously wounded threshold = half total HP (rounded up)
// Death save = BODY stat
import effectJson from "../data/effects.json"
import "../style/effects.css"
import ModalForMapState from "../utils/ModalForMapState"

import bleedSVG from "../assets/icons/bleed.svg"
import blindSVG from "../assets/icons/blind.svg"
import burnSVG from "../assets/icons/burn.svg"
import crippleSVG from "../assets/icons/cripple.svg"
import drunkSVG from "../assets/icons/drunk.svg"
import empSVG from "../assets/icons/emp.svg"
import energizedSVG from "../assets/icons/energized.svg"
import hydrationSVG from "../assets/icons/hydration.svg"
import knockdownSVG from "../assets/icons/knockdown.svg"
import nourishmentSVG from "../assets/icons/nourishment.svg"
import poisonSVG from "../assets/icons/poison.svg"
import refreshedSVG from "../assets/icons/refreshed.svg"
import restedSVG from "../assets/icons/rested.svg"
import stunSVG from "../assets/icons/stun.svg"
import { useState } from "react"


const iconMap = {
  "bleed": bleedSVG,
  "blind": blindSVG,
  "burn": burnSVG,
  "cripple": crippleSVG,
  "drunk": drunkSVG,
  "emp": empSVG,
  "energized": energizedSVG,
  "hydration": hydrationSVG,
  "knockdown": knockdownSVG,
  "nourishment": nourishmentSVG,
  "poison": poisonSVG,
  "refreshed": refreshedSVG,
  "rested": restedSVG,
  "stun": stunSVG
}

const Effects = () => {
  const [modalDisplays, setModalDisplays] = useState({
  "bleed": "none",
  "blind": "none",
  "burn": "none",
  "cripple": "none",
  "drunk": "none",
  "emp":      "none",
  "energized": "none",
  "hydration": "none",
  "knockdown": "none",
  "nourishment": "none",
  "poison": "none",
  "refreshed": "none",
  "rested": "none",
  "stun": "none"
  })


  const toggleModalDisplays = (modalDisplays, setModalDisplays, effect) => {
    const effectLowerCase = effect.toLowerCase()
    const currentDisplay = modalDisplays[effectLowerCase] 

    if (currentDisplay == "none") {
      const newModalDisplays = {...modalDisplays}
      newModalDisplays[effectLowerCase] = "flex"
        setModalDisplays(newModalDisplays)
    } else {
      const newModalDisplays = {...modalDisplays}
      newModalDisplays[effectLowerCase] = "none"
        setModalDisplays(newModalDisplays)
    }
}


  return (
   <div className="flexRow">
    <div className="flexCol">
    <div className="flexRow">
      <h2>Effects</h2>
    </div>
     <div id="effects" className="flexRow">
      {
        effectJson.map(skill => {
          const skillLowerCase = skill["name"].toLowerCase()
          const svgPath = iconMap[skillLowerCase]

          return <div className="flexCol, imgContainer" key={skill["name"]}>
            <img 
          src={svgPath} 
          alt={skill["alt"]}
          style={{height: "2rem"}}
          onClick={(e) => {toggleModalDisplays(modalDisplays, setModalDisplays, skill["name"])}}></img>

          <ModalForMapState title={skill["name"]} 
          content={skill["description"]} 
          modalDisplays={modalDisplays} 
          setModalDisplays={setModalDisplays}
          toggleModalDisplays={toggleModalDisplays}
          iconMap={iconMap}/>
          </div>
        })
      }
    </div>
    </div>
   </div>
  );
};

export default Effects;
