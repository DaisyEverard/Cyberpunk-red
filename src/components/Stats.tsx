import { useContext, useState } from 'react';

import { HPContext, StatsContext } from '../App';
import statsJson from '../data/statsDescription.json';
import HideableDescriptionCell from '../utils/HideableDescriptionCell';
import IncrementDecrementStat from '../utils/IncrementDecrementStat';
import "../style/stats.css"

const Stats = props => {
  const getHP = props.getHP;
  const { HP, setHP } = useContext(HPContext);
  const { stats, setStats } = useContext(StatsContext);

  const [remainingPoints, setRemainingPoints] = useState(42);

  const setStatsAndHP = (setHP, getHP, newStats) => {
    setHP(getHP(newStats));
    setStats(newStats);
  };

  return (
    <div className="flexRow" id="stats">
      <div className='flexCol' id="statDescriptions">
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
      <div
        className="flexCol"
      id="statTable"
      >
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
            {Object.keys(stats).map((statName, index) => {
              const level = stats[statName];

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
