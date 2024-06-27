// When your Character falls to zero Hit Points, they enter the Death State (a measure of how fast they are dying)

// Seriously wounded threshold = half total HP (rounded up)
// Death save = BODY stat
import effectJson from "../data/effects.json"
import "../style/effects.css"

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

          return <div className="flexCol, imgContainer">
            <img 
          key={skill["name"]}
          src={svgPath} 
          alt={skill["alt"]}
          style={{height: "2rem"}}></img>
          </div>
        })
      }
    </div>
    </div>
   </div>
  );
};

export default Effects;
