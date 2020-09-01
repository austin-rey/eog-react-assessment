import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';

const useStyles = makeStyles({
  paper: {},
});

// Sample data from documentation api
const data = [
  {
    metric: 'flareTemp',
    at: 1598923841066,
    value: 719.9,
    unit: 'F',
  },
  {
    metric: 'flareTemp',
    at: 1598923842368,
    value: 692.04,
    unit: 'F',
  },
  {
    metric: 'flareTemp',
    at: 1598923843669,
    value: 681.61,
    unit: 'F',
  },
  {
    metric: 'flareTemp',
    at: 1598923844970,
    value: 724.98,
    unit: 'F',
  },
  {
    metric: 'flareTemp',
    at: 1598923846271,
    value: 718.48,
    unit: 'F',
  },
  {
    metric: 'flareTemp',
    at: 1598923847573,
    value: 736.38,
    unit: 'F',
  },
  {
    metric: 'flareTemp',
    at: 1598923848874,
    value: 696.66,
    unit: 'F',
  },
  {
    metric: 'flareTemp',
    at: 1598923850175,
    value: 654.95,
    unit: 'F',
  },
  {
    metric: 'flareTemp',
    at: 1598923851477,
    value: 644.83,
    unit: 'F',
  },
  {
    metric: 'flareTemp',
    at: 1598923852777,
    value: 623.93,
    unit: 'F',
  },
];

const MetricChart = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper variant="outlined">
        <LineChart width={1200} height={800} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="at">
            <Label value="Times" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" name={data[0].metric} />
        </LineChart>
      </Paper>
    </div>
  );
};

export default MetricChart;
