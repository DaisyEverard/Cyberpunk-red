import { useContext } from 'react';

import { CharacterContext } from '../context/Character';
import statsJson from '../data/statsDescription.json';
import CollapsibleTextBox from './text_boxes/CollapsibleTextBox';

const StatsDipslay = () => {
  const { getStats } = useContext(CharacterContext);

  return (
    <div className="flex gap-1">
      <div className="box flex flex-col flex-1">
        {statsJson.map(stat => {
          const long_name_string = `Long Name: ${stat['long_name']}\n\n`;
          const group_string = `Group: ${stat['group']}\n\n`;
          const item_description_string = `Description: ${stat['description']}`;
          const descriptionArray = [long_name_string, group_string, item_description_string];

          const key = stat['id'];
          const item = stat['name'];
          return (
            <CollapsibleTextBox
              key={key}
              title={item}
              descriptionArray={descriptionArray}
            />
          );
        })}
      </div>
      <div className="box flex flex-col flex-1">
        <table>
          <thead>
            <tr>
              <th>STAT</th>
              <th>LEVEL</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(getStats()).map((statName, index) => {
              const level = getStats()[statName];

              return (
                <tr key={index}>
                  <th>{statName}</th>
                  <td>{level}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatsDipslay;
