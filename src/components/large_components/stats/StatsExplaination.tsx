import statsJson from '../../../data/statsDescription.json';
import CollapsibleTextBox from '../../text_boxes/CollapsibleTextBox';

const StatsExplaination = () => {
  return (
    <div className="box flex flex-col flex-1 justify-center">
      <div
        id="Jame(')s Border"
        className="border-[3px] border-main-dark-bg"
      >
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
    </div>
  );
};

export default StatsExplaination;
