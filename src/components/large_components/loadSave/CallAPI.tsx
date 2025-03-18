import { useState } from 'react';

import axios from 'axios';

import { handleAPICall } from '../../../utils/apiCalls';
import Button from '../../common/Button';

const CallAPI = () => {
  const [response, setResponse] = useState('');
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  const handleCall = async () => {
    const [data, err] = await handleAPICall('hp/by_name/Johnny%20Silverhand', 'GET');

    console.log('response ', data);

    if (err) {
      throw err;
    }
    setResponse(data);
  };

  return (
    <>
      <h1>API response:</h1>
      <div>{response}</div>
      <Button onClick={handleCall}>call api</Button>
    </>
  );
};

export default CallAPI;
