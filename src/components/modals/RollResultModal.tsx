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
        className="modalBG"
        onClick={e => {
          e.preventDefault();
          toggleModalDisplay(modalDisplay, setModalDisplay);
        }}
      ></div>
      <div className="modalContainer">
        <div className="modal flex flex-col items-center">
          <Button
            variant="close"
            onClick={e => {
              e.preventDefault();
              toggleModalDisplay(modalDisplay, setModalDisplay);
            }}
          >
            X
          </Button>
          <h2>{key.toUpperCase()}</h2>

          {/* the content needs to change */}
          {getResultDisplay(rollResult, statName)}
        </div>
      </div>
    </div>
  );
};

export default RollResultModal;
