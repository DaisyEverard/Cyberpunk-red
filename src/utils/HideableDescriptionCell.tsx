import { useState } from 'react';

import '../style/utils.css';

type HideableDescriptionCellProps = {
  title: string;
  descriptionArray: Array<string>;
};
const HideableDescriptionCell = ({ title, descriptionArray }: HideableDescriptionCellProps) => {
  const [plusMinus, setPlusMinus] = useState('+');
  const [boxDisplay, setBoxDisplay] = useState('none');

  const toggleDescription = () => {
    if (plusMinus == '+') {
      setPlusMinus('-');
      setBoxDisplay('inline');
    } else {
      setPlusMinus('+');
      setBoxDisplay('none');
    }
  };

  return (
    <div className="hideableDescriptionCell">
      <h4
        onClick={e => {
          e.preventDefault();
          toggleDescription();
        }}
      >
        <span>{title}</span>
        <button className="text-white mr-1 float-right font-bold">{plusMinus}</button>
      </h4>
      {descriptionArray.map((description, index) => {
        return (
          <p
            key={index}
            style={{ display: boxDisplay }}
          >
            {description}
          </p>
        );
      })}
    </div>
  );
};

export default HideableDescriptionCell;
