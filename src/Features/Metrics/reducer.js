import { combineReducers } from 'redux';
import { NEW_MEASUREMENT } from './actions';

const initialState = {
  measurements: [],
};

const measurements = (state = initialState, action) => {
  console.log('Action:', action.newMetric);
  console.log('State:', state);
  switch (action.type) {
    case NEW_MEASUREMENT:
      return {
        measurements: [
          ...state.measurements,
          {
            metric: action.newMetric,
          },
        ],
      };
    default:
      return state;
  }
};

export default measurements;
