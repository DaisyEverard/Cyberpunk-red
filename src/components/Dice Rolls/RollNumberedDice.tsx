import { useState } from 'react';

import { rollDice } from '../../utils/commonMethods';

type RollNumberedDiceProps = {
  maxNumber: number;
};

const RollNumberedDice = ({ maxNumber }: RollNumberedDiceProps) => {
  const [currentRoll, setCurrentRoll] = useState(maxNumber);

  const handleButtonOnClick = () => {
    setCurrentRoll(rollDice(maxNumber));
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleButtonOnClick}
        className="button"
      >
        D{maxNumber}
      </button>
      <p>result: {currentRoll}</p>
    </div>
  );
};

export default RollNumberedDice;
