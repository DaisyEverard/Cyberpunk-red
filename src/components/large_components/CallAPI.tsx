import { useEffect, useState } from 'react';

import axios from 'axios';

import Button from '../common/Button';

const CallAPI = () => {
  const [response, setResponse] = useState([]);
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  const handleCall = () => {
    axios
      .get('http://localhost:8080/hp/by_name/Johnny%20Silverhand')
      .then(res => {
        console.log(res);
        setResponse(res.data);
      })
      .catch(error => {
        console.error(error);
      });
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
