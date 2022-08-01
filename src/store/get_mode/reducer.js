// @ts-nocheck
import { LOAD_MODES_DATA_SUCCESS } from "./action_get";

const initialState = {
  modes: [],
};

export const getModesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MODES_DATA_SUCCESS:
      return { ...state, modes: action.modes };
    default:
      return state;
  }
};
