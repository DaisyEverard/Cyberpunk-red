import { APICharacterType } from '../types/types';
import { axiosBaseClient as axios } from './axios';

export type NameAndID = {
  id: string;
  name: string;
};

const handleDeleteCharacter = async (id: string) => {
  return await axios.delete('character/' + id);
};

const handleGetNamesAndIDs = async () => {
  return await axios.get<NameAndID[]>('character/names_and_ids');
};

const handleGet = async (path: string): Promise<[any, Error | null]> => {
  let response = '';
  let error = null;

  await axios
    .get(path)
    .then(res => {
      response = res.data;
    })
    .catch(err => {
      error = err;
    });

  return [response, error];
};

const handlePost = async (path: string, body: string): Promise<[any, Error | null]> => {
  let response = '';
  let error = null;

  if (!body) {
    return ['', new Error(`no body provided to post request`)];
  }

  axios.interceptors.request.use(request => {
    console.log('starting request', JSON.stringify(request, null, 2));
    return request;
  });

  await axios
    .post(path, body, {
      headers: {
        'content-type': 'application/json',
      },
    })
    .then(res => {
      response = res.data;
    })
    .catch(err => {
      error = err;
    });

  return [response, error];
};

export { handlePost, handleGet, handleGetNamesAndIDs, handleDeleteCharacter };
