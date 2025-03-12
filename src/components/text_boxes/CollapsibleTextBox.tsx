import { useState } from 'react';

import '../../style/utils.css';

type CollapsibleTextBoxProps = {
  title: string;
  descriptionArray: Array<string>;
};
const CollapsibleTextBox = ({ title, descriptionArray }: CollapsibleTextBoxProps) => {
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
    <div className="w-full">
      <h4
        onClick={e => {
          e.preventDefault();
          toggleDescription();
        }}
      >
        <span>{title}</span>
        <span className="text-white mr-1 float-right font-bold">{plusMinus}</span>
      </h4>
      {descriptionArray.map((description, index) => {
        return (
          <p
            className="whitespace-pre-wrap"
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

export default CollapsibleTextBox;
