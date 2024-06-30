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
      <div className="box  flex flex-col justify-center items-center">
        <div className="text-2xl">{healthPoints}</div>
        <div>Health Points (HP)</div>
      </div>
      <div className="box flex flex-col justify-center items-center">
        <div className="text-2xl">{humanity}</div>
        <div>Humanity (HUM)</div>
      </div>
    </div>
  );
};

export default Profile;
