import * as HttpUtility from './HttpUtility';

export async function getToModel(Model, endpoint, params) {
  const response = await HttpUtility.get(endpoint, params);

  return _restModelCreator(Model, response);
}

export async function postToModel(Model, endpoint, data) {
  const response = await HttpUtility.post(endpoint, data);

  return _restModelCreator(Model, response);
}


