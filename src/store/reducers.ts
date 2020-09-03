import { reducer as weatherReducer } from '../Features/Weather/reducer';
import measurements from '../Features/Metrics/reducer';

export default {
  weather: weatherReducer,
  metrics: measurements,
};
