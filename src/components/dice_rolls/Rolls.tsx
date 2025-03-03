import RollNumberedDice from './RollNumberedDice';

const Rolls = () => {
  return (
    <div
      id="rolls"
      className="box flex justify-around"
    >
      <RollNumberedDice maxNumber={10} />
      <RollNumberedDice maxNumber={6} />
    </div>
  );
};

export default Rolls;
