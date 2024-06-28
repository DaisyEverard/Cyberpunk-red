
import rolesJson from '../data/roles.json';
import DropdownCell from '../utils/DropdownCell';
import SimpleEditableTextCell from '../utils/SimpleEditableTextCell';


type ProfileProps = {
  name: string;
  setName: (value: string) => void;
  role: string;
  setRole: (value: string) => void;
  healthPoints: number;
  humanity: number;
};

const allRoles = Object.keys(rolesJson);

const Profile = ({ name, setName, role, setRole, healthPoints, humanity }: ProfileProps) => {
 
  return (
    <div className="flex bg-red-200 rounded px-5 gap-2">
      <div className="px-2  flex gap-2 items-center">
        <p>Name:</p>
        <SimpleEditableTextCell
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className=" px-2 flex gap-2 items-center">
        <p>Role:</p>
        <DropdownCell
          value={role}
          values={allRoles}
          onChanged={value => setRole(value)}
        />
      </div>
      <div className="px-2   flex gap-2 items-center">
        <p>HP: {healthPoints}</p>
      </div>
      <div className=" px-2   flex gap-2 items-center">
        <p>Humanity (HUM): {humanity}</p>
      </div>
    </div>
  );
};

export default Profile;
