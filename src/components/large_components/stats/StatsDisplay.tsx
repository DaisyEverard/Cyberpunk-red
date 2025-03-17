import { useContext } from 'react';

import { CharacterContext } from '../../../context/Character';
import StatsExplaination from './StatsExplaination';

const StatsDipslay = () => {
  const { state } = useContext(CharacterContext);

  return (
    <div className="flex gap-1">
      <StatsExplaination />
      <div className="box flex flex-col flex-1">
        <table>
          <thead>
            <tr>
              <th>STAT</th>
              <th>LEVEL</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(state.stats).map((statName, index) => {
              const level = state.stats[statName];

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
