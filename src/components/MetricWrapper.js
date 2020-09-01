import React from 'react';

import Dropdown from './Dropdown';
import MetricChart from './MetricChart';
import MetricListItems from './MetricListItems';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  container: {},
}));

const MetricWrapper = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <h1>Metric Dashboard</h1>
        <Dropdown />
        <MetricListItems />
        <MetricChart />
      </Container>
    </div>
  );
};

export default MetricWrapper;
