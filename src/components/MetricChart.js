import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';

const useStyles = makeStyles({
  paper: {},
});

// Sample data
// const data = [
//   {
//     metric: 'flareTemp',
//     at: 1598923841066,
//     value: 719.9,
//     unit: 'F',
//   },
// ]

const MetricChart = ({ data }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper variant="outlined">
        <LineChart width={1200} height={800} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="at" domain={['dataMin', 'dataMax']}>
            <Label value="Times" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="" stroke="#8884d8" name={'metric'} />
        </LineChart>
      </Paper>
    </div>
  );
};

export default MetricChart;
