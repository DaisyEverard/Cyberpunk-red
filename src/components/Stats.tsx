import { useContext, useState } from 'react';

import { CharacterContext } from '../context/Character';
import statsJson from '../data/statsDescription.json';
import HideableDescriptionCell from '../utils/HideableDescriptionCell';
import IncrementDecrementStat from '../utils/IncrementDecrementStat';

const Stats = () => {
  const { getStats } = useContext(CharacterContext);

  const [remainingPoints, setRemainingPoints] = useState(42);

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
            <HideableDescriptionCell
              key={key}
              title={item}
              descriptionArray={descriptionArray}
            />
          );
        })}
      </div>
      <div className="box flex flex-col flex-1">
        <div>
          <p>
            <strong>Points Remaining:</strong>
          </p>
          <p>{remainingPoints}</p>
        </div>
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
                  <IncrementDecrementStat
                    statName={statName}
                    setRemainingPoints={setRemainingPoints}
                    remainingPoints={remainingPoints}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stats;
