import { useState } from 'react';

type DiceBoxProps = {
  maxNumber: number;
};

const DiceBox = ({ maxNumber }: DiceBoxProps) => {
  const [currentRoll, setCurrentRoll] = useState(maxNumber);
  const rollDice = (maxNumber: number) => {
    const random = Math.random() * maxNumber;
    return Math.ceil(random);
  };
  return (
    <div
      id="dice-box"
      className="flex flex-col gap-2"
    >
      <h1
        onClick={e => {
          e.preventDefault();
          setCurrentRoll(rollDice(maxNumber));
        }}
      >
        D{maxNumber}
      </h1>
      <p>result: {currentRoll}</p>
    </div>
  );
};

export default DiceBox;
