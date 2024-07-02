import { useContext } from 'react';
import rolesJson from '../data/roles.json';
import DropdownCell from '../utils/DropdownCell';
import SimpleEditableTextCell from '../utils/SimpleEditableTextCell';
import { calculateHPMax, decrementAnyNumericalState, incrementAnyNumericalState } from '../utils/commonMethods';
import { HPContext } from '../App';

type ProfileProps = {
  name: string;
  setName: (value: string) => void;
  role: string;
  setRole: (value: string) => void;
  healthPoints: number;
  humanity: number;
  stats: Record<string, number>;
};

const allRoles = Object.keys(rolesJson);


const Profile = ({ name, setName, role, setRole, healthPoints, humanity, stats }: ProfileProps) => {
  const {HP, setHP} = useContext(HPContext);

  const heal = (stats: Record<string, number>, HP: number, setHP: (newHP: number) => void) => {
    const HPChangeInput = document.querySelector('#HPChangeInput')
    const HPMax = calculateHPMax(stats)
    let HPChange = HPChangeInput.value

    if (HPChange == "") {
      incrementAnyNumericalState(HP, setHP, HPMax)
      HP += 1
    } else {

    HPChange = parseInt(HPChange)

    let success = true
    while (HPChange > 0 && success) {
      success = incrementAnyNumericalState(HP, setHP, HPMax)
      HPChange -= 1
      HP += 1
    }
    }


    HPChangeInput.value = null
  }

  const takeDamage = (HP: number, setHP: (newHP: number) => void) => {
    const HPChangeInput = document.querySelector('#HPChangeInput')
    let HPChange = HPChangeInput.value

    if (HPChange == "") {
      decrementAnyNumericalState(HP, setHP)
      HP -= 1
    } else {
      HPChange = parseInt(HPChange)

    let success = true
    while (HPChange > 0 && success) {
      success = decrementAnyNumericalState(HP, setHP)
      HPChange -= 1
      HP -= 1
    }}

    HPChangeInput.value = null
  }

  return (
    <div className="flex gap-1">
      <div className="flex box">
        <div className="h-32 w-32 rounded-full bg-neutral-200"></div>
      </div>

      <div className="box flex flex-col justify-center flex-1">
        <div className="px-2 flex gap-2 items-center">
          <div>Name:</div>
          <SimpleEditableTextCell
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className=" px-2 flex gap-2 items-center">
          <div>Role:</div>
          <DropdownCell
            value={role}
            values={allRoles}
            onChanged={value => setRole(value)}
          />
        </div>
      </div>

      <div className="box  flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl">{healthPoints} / {calculateHPMax(stats)}</div>
        <div>Health Points (HP)</div>
      </div>
      <div className="flex flex-col justify-center items-center ml-3">
        {/* these should probably be green and red but ¯\_(ツ)_/¯ how fill? stroke??*/}
        <p 
        className='rounded-md border-2 p-0.5 text-heal-green border-heal-green'
        onClick={(e) => {e.preventDefault(); heal(stats, HP, setHP)}}>HEAL</p>
        {/* don't allow negative input */}
        <input className='box w-20 h-10' type="number" id="HPChangeInput" min={0}></input>
        <p 
        className='rounded-md border-2 p-0.5 text-damage-red border-damage-red'
        onClick={(e) => {e.preventDefault(); takeDamage(HP, setHP)}}>DAMAGE</p>
      </div>
      </div>

      <div className="box flex flex-col justify-center items-center">
        <div className="text-2xl">{humanity}</div>
        <div>Humanity (HUM)</div>
      </div>


    </div>
  );
};

export default Profile;
