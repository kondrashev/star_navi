// @ts-nocheck
export const LOAD_MODES_DATA_SUCCESS = "LOAD_MODES_DATA_SUCCESS";

const loadModesFetchDataSuccess = (modes) => {
  return {
    type: LOAD_MODES_DATA_SUCCESS,
    modes,
  };
};

export const loadModesFetchData = (data) => async (dispatch) => {
  const { url } = data;
  let response = await fetch(url);
  if (response.status === 200) {
    response = await response.json();
    dispatch(loadModesFetchDataSuccess(response));
  } else {
    console.log({
      message: `Error from server №${response.status} ${response.statusText}!!!`,
    });
  }
};
