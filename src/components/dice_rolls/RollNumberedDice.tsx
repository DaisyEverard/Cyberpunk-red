import { useState } from 'react';

import { rollDice } from '../../utils/commonMethods';
import Button from '../common/Button';

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
      <Button onClick={handleButtonOnClick}>D{maxNumber}</Button>
      <p>result: {currentRoll}</p>
    </div>
  );
};

export default RollNumberedDice;
