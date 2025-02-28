import { useContext, useState } from 'react';

import { BUTTON_STYLE } from '../../constants';
import { CharacterContext } from '../../context/Character';
import { rollSkillCheck } from '../../utils/commonMethods';
import RollResultModal from '../../utils/modals/RollResultModal';

type RollSkillCheckProps = {
  skillName: string;
  skillLevel: number;
};

export const RollSkillCheck = ({ skillName, skillLevel }: RollSkillCheckProps) => {
  const { getCurrentSkills, getStats } = useContext(CharacterContext);
  const baseStatType = getCurrentSkills()[skillName]['stat_type'];
  const statLevel = getStats()[baseStatType];

  const [modalDisplay, setModalDisplay] = useState('none');
  const [rollResult, setRollResult] = useState([0, 0, 0, 0]);

  const toggleModalDisplay = (modalDisplay: string, setModalDisplay: (modalDisplay: string) => void) => {
    if (modalDisplay == 'none') {
      setModalDisplay('flex');
    } else {
      setModalDisplay('none');
    }
  };

  const handleButtonOnClick = (
    skillLevel: number,
    statLevel: number,
    toggleModalDisplay: any,
    modalDisplay: string,
    setModalDisplay: (ModalDisplay: string) => void,
    setRollResult: (rollResult: number[]) => void,
  ) => {
    const baseRoll = rollSkillCheck();
    setRollResult([baseRoll[0], baseRoll[1], skillLevel, statLevel]);
    toggleModalDisplay(modalDisplay, setModalDisplay);
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <button
        onClick={e => {
          handleButtonOnClick(skillLevel, statLevel, toggleModalDisplay, modalDisplay, setModalDisplay, setRollResult);
        }}
        className={BUTTON_STYLE + ' max-w-[150px]'}
      >
        Roll
      </button>
      <RollResultModal
        title={skillName + ' roll'}
        statName={baseStatType}
        rollResult={rollResult}
        modalDisplay={modalDisplay}
        setModalDisplay={setModalDisplay}
        toggleModalDisplay={toggleModalDisplay}
      />
    </div>
  );
};
