import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';

import { Provider, useQuery, useSubscription, Client, defaultExchanges, subscriptionExchange } from 'urql';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import gql from 'graphql-tag';

import Dropdown from '../../components/MetricDropdown';
import MetricChart from '../../components/MetricChart';
import MetricListItems from '../../components/MetricSelections';

import Container from '@material-ui/core/Container';
import { NEW_MEASUREMENT } from './actions';

const client = new Client({
  url: 'https://react.eogresources.com/graphql',
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription(operation) {
        return subscriptionClient.request(operation);
      },
    }),
  ],
});

// ~~~~ GRAPHQL QUERY ~~~~ //
const HEARTBEAT_QUERY = gql`
  query {
    heartBeat
  }
`;

const FLARETEMP_MEASUREMENTS_QUERY = gql`
  query {
    getMeasurements(input: { metricName: "flareTemp", before: 1599012184082, after: 1599012167166 }) {
      metric
      at
      value
      unit
    }
  }
`;

const METRIC_NAMES = gql`
  query {
    getMetrics
  }
`;

// ~~~~ GRAPHQL SUBSCRIPTION ~~~~ //
const subscriptionClient = new SubscriptionClient('ws://react.eogresources.com/graphql', {
  reconnect: true,
});

const NEW_MEASUREMENT_SUBSCRIPTION = gql`
  subscription {
    newMeasurement {
      metric
      value
      at
      unit
    }
  }
`;

const dispatch = useDispatch();

const Metrics = props => {
  const [subscriptionResult] = useSubscription({ query: NEW_MEASUREMENT_SUBSCRIPTION });
  const { data: metricData, fetching, error } = subscriptionResult;

  const handleNewMetric = useCallback(
    newMetric => {
      dispatch({ type: NEW_MEASUREMENT, newMetric });
    },
    [dispatch],
  );
  const dropdownSelect = selection => {
    console.log('Selection:', selection);
  };

  useEffect(() => {
    if (!metricData) return;
    handleNewMetric(metricData.newMeasurement);
  }, [metricData]);

  return (
    <div>
      <Dropdown onChange={dropdownSelect} />
      <MetricListItems />
      <MetricChart data={metricData} />
    </div>
  );
};

const MetricNames = props => {
  const [names] = useQuery({ query: METRIC_NAMES });
  const { data, fetching, error } = result;
  const metricNames = data.getMetrics;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  dispatch({ type: GET_METRIC_NAMES, metricNames });

  return null;
};
export default () => {
  return (
    <Provider value={client}>
      <Container>
        <h1>Metric Dashboard</h1>
        <Metrics />
        <MetricNames />
      </Container>
    </Provider>
  );
};
