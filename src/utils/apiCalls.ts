import { axiosBaseClient as axios } from './axios';

export type NameAndID = {
  _id: string;
  name: string;
};

const handleDeleteCharacter = async (id: string) => {
  const body = { id: id };
  return await axios.post('document/delete', JSON.stringify(body));
};

const handleGetNamesAndIDs = async () => {
  return await axios.get<NameAndID[]>('characters/names_and_ids');
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

  await axios
    .post(path, body)
    .then(res => {
      response = res.data;
    })
    .catch(err => {
      error = err;
    });

  return [response, error];
};

export { handlePost, handleGet, handleGetNamesAndIDs, handleDeleteCharacter };
