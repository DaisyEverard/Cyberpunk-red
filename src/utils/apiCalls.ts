import axios from 'axios';

const handleGet = async (path: string): Promise<[string, Error | null]> => {
  const BASE_URL = 'http://localhost:8080/';
  //   path = 'hp/by_name/Johnny%20Silverhand'

  let response = '';
  let error = null;

  await axios
    .get(BASE_URL + path)
    .then(res => {
      response = res.data;
    })
    .catch(err => {
      error = err;
    });

  return [response, error];
};

const handlePost = async (path: string, body: Record<string, any>): Promise<[string, Error | null]> => {
  const BASE_URL = 'http://localhost:8080/';
  //   path = 'hp/by_name/Johnny%20Silverhand'

  let response = '';
  let error = null;

  await axios
    .post(BASE_URL + path, body)
    .then(res => {
      response = res.data;
    })
    .catch(err => {
      error = err;
    });

  return [response, error];
};

const handleAPICall = async (
  path: string,
  method: string,
  body: Record<string, any> = {},
): Promise<[string, Error | null]> => {
  switch (method) {
    case 'GET':
      return await handleGet(path);
      break;
    case 'POST':
      return await handlePost(path, body);
      break;
    default:
      return ['', new Error(`invalid method "${method}" provided`)];
      break;
  }
};

export { handleAPICall };
