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
      setBoxDisplay('block');
    } else {
      setPlusMinus('+');
      setBoxDisplay('none');
    }
  };

  return (
    <div className="w-full bg-active-bg-grey">
      <div
        onClick={e => {
          e.preventDefault();
          toggleDescription();
        }}
      >
        <h4>
          {title}
          <span className="text-white mr-1 float-right font-bold">{plusMinus}</span>
        </h4>
      </div>
      <div
        style={{ display: boxDisplay }}
        className="border-[3px] border-main-dark-bg px-4 py-2"
        id="Jame(')s Border"
      >
        {descriptionArray.map((description, index) => {
          return (
            <p
              className="whitespace-pre-wrap "
              key={index}
            >
              {description}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default CollapsibleTextBox;
