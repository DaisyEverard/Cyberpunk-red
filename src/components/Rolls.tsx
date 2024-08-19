import DiceBox from './DiceBox';

const Rolls = () => {
  return (
    <div
      id="rolls"
      className="box flex justify-around"
    >
      <DiceBox maxNumber={10} />
    </div>
  );
};

export default Rolls;
