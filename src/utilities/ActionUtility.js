

export async function createThunkEffect(dispatch, actionType, effect, ...args) {
  dispatch(createAction(actionType));

  const model = await effect(...args);


  dispatch(createAction(`${actionType}_FINISHED`, model));

  return model;
}

export function createAction(type, payload = undefined, error = false, meta = null) {
  return { type, payload, error, meta };
}
