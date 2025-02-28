type RollResultModalProps = {
  title: string;
  rollResult: number[];
  modalDisplay: string;
  setModalDisplay: (newModalDisplay: string) => void;
  toggleModalDisplay: (modalDisplay: string, setModalDisplay: (newModalDisplay: string) => void) => void;
};

const RollResultModal = ({
  title,
  rollResult,
  modalDisplay,
  setModalDisplay,
  toggleModalDisplay,
}: RollResultModalProps) => {
  const getResultDisplay = (rollResult: number[]) => {
    const [firstRoll, secondRoll, skillMod, statMod] = rollResult;
    const rollTotal = firstRoll + skillMod + statMod + (firstRoll === 1 || firstRoll === 10 ? secondRoll : 0);

    return (
      <p>
        {firstRoll}
        {firstRoll === 1 || firstRoll === 10 ? ` + ${secondRoll} (Crit)` : ''}
        {` + ${skillMod} (Skill) + ${statMod} (Stat) = `}
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
        <div className="modal flex flex-col">
          <button
            onClick={e => {
              e.preventDefault();
              toggleModalDisplay(modalDisplay, setModalDisplay);
            }}
            className="closeModalButton"
          >
            X
          </button>
          <h2>{key.toUpperCase()}</h2>

          {/* the content needs to change */}
          {getResultDisplay(rollResult)}
        </div>
      </div>
    </div>
  );
};

export default RollResultModal;
