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
        className="rounded-md bg-main-dark-bg px-2 py-1 text-main-light-text shadow hover:bg-main-dark-bg/80"
      >
        D{maxNumber}
      </button>
      <p>result: {currentRoll}</p>
    </div>
  );
};

export default RollNumberedDice;
