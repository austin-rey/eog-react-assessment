// Action Types
export const NEW_MEASUREMENT = 'NEW_MEASUREMENT';
export const GET_METRIC_NAMES = 'GET_METRIC_NAMES';
export const DISPLAY_METRIC_LINE = 'DISPLAY_METRIC_LINE';

//Creators
export function newMeasurement(measurement) {
  return { type: NEW_MEASUREMENT, measurement };
}

export function getMetricNames(names) {
  return { type: GET_METRIC_NAMES, names };
}

export function displayMetricLine(name) {
  return { type: DISPLAY_METRIC_LINE, name };
}
