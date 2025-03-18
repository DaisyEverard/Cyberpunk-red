import Button from '../../common/Button';

const LoadCharacter = () => {
  const handleRefreshList = () => {
    console.log('handling a refresh');
    return null;
  };

  return (
    <div className="box flex flex-col gap-1">
      <div className="flex gap-1">
        <div className="flex flex-col flex-1 items-center">
          <div>Load Character Div</div>

          <Button onClick={handleRefreshList}>Refresh Character List</Button>
        </div>
      </div>
    </div>
  );
};

export default LoadCharacter;
