import { useState } from 'react';

import axios from 'axios';

import { handleGet, handlePost } from '../../../utils/apiCalls';
import Button from '../../common/Button';

const CallAPI = () => {
  const [response, setResponse] = useState('');
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  const hardCodedGet = async () => {
    const [data, err] = await handleGet('role/by_name/Johnny%20Silverhand');

    console.log('response ', data);

    if (err) {
      throw err;
    }
    setResponse(data);
  };

  const hardCodedPost = async () => {
    const body = {
      role: 'rockerboy',
    };

    const [data, err] = await handlePost('role/by_name/Johnny%20Silverhand', JSON.stringify(body));

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
      <Button onClick={hardCodedGet}>GET</Button>
      <Button onClick={hardCodedPost}>POST</Button>
    </>
  );
};

export default CallAPI;
