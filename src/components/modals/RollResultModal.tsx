import Button from '../common/Button';

type RollResultModalProps = {
  title: string;
  statName: string;
  rollResult: number[];
  modalDisplay: string;
  setModalDisplay: (newModalDisplay: string) => void;
  toggleModalDisplay: (modalDisplay: string, setModalDisplay: (newModalDisplay: string) => void) => void;
};

const RollResultModal = ({
  title,
  statName,
  rollResult,
  modalDisplay,
  setModalDisplay,
  toggleModalDisplay,
}: RollResultModalProps) => {
  const getResultDisplay = (rollResult: number[], statName: string) => {
    const [firstRoll, secondRoll, skillMod, statMod] = rollResult;
    const rollTotal = firstRoll + skillMod + statMod + (firstRoll === 1 || firstRoll === 10 ? secondRoll : 0);

    return (
      <p>
        {firstRoll}
        {firstRoll === 1 || firstRoll === 10 ? ` + ${secondRoll} (Crit)` : ''}
        {` + ${skillMod} (Skill) + ${statMod} (${statName}) = `}
        <strong>{rollTotal}</strong>
      </p>
    );
  };
  const key = title.toLowerCase();
  return (
    <div style={{ display: modalDisplay }}>
      <div
        className="fixed top-0 left-0 z-1 opacity-50 bg-white w-full h-full"
        onClick={e => {
          e.preventDefault();
          toggleModalDisplay(modalDisplay, setModalDisplay);
        }}
      ></div>
      <div className="modalContainer px-2 py-2 rounded-lg bg-main-dark-bg fixed w-[400px] top-[20px] left-[50%] ml-[-200px]">
        <div className="flex flex-col px-2 py-2 rounded-l bg-white border-black border-[2px] max-h-[80vh] overflow-y-scroll">
          <Button
            variant="round"
            onClick={e => {
              e.preventDefault();
              toggleModalDisplay(modalDisplay, setModalDisplay);
            }}
          >
            X
          </Button>
          <h2 className="font-bold">{key.toUpperCase()}</h2>

          {/* the content needs to change */}
          {getResultDisplay(rollResult, statName)}
        </div>
      </div>
    </div>
  );
};

export default RollResultModal;
