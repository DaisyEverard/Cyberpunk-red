import { useState } from 'react';

import '../style/hideableBoxDisplay.css';

export default function HideableDescriptionCell(props) {
  const title = props.title;
  const descriptionArray = props.descriptionArray;

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
    <div id="hideableBoxDisplay">
      <h4
        onClick={e => {
          toggleDescription();
        }}
      >
        <span>{title}</span>
        <button className="flexCol">{plusMinus}</button>
      </h4>
      {descriptionArray.map((attribute, index) => {
        return (
          <p
            key={index}
            style={{ display: boxDisplay }}
          >
            {attribute}
          </p>
        );
      })}
      <p style={{ display: boxDisplay }}>{props.description}</p>
    </div>
  );
}
