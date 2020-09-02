import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Provider, useQuery, useSubscription, Client, defaultExchanges, subscriptionExchange } from 'urql';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import gql from 'graphql-tag';

import { actions } from './reducer';

import Dropdown from '../../components/MetricDropdown';
import MetricChart from '../../components/MetricChart';
import MetricListItems from '../../components/MetricSelections';

import Container from '@material-ui/core/Container';

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

// ~~~~ GRAPHQL SUBSCRIPTION ~~~~ //
const subscriptionClient = new SubscriptionClient('ws://react.eogresources.com/graphql', {
  reconnect: true,
});

const NEW_MEASUREMENT_SUBSCRIPTION = gql`
  subscription {
    newMeasurement {
      metric
      value
    }
  }
`;

const handleSubscription = (metrics = [], response) => {
  return [response, ...metrics];
};

const Metrics = () => {
  // const [result] = useQuery({ query: FLARETEMP_MEASUREMENTS_QUERY });
  // const { data, fetching, error } = result;
  // if (fetching) return <p>Loading...</p>;
  // if (error) return <p>Oh no... {error.message}</p>;
  // const temperatures = data.getMeasurements;
  // return (
  //   <div>
  //     {temperatures.map(measurement => (
  //       <p>{measurement.value}</p>
  //     ))}
  //   </div>
  // );

  const [subscriptionResult] = useSubscription({ query: NEW_MEASUREMENT_SUBSCRIPTION }, handleSubscription);
  const { data, fetching, error } = subscriptionResult;

  let activeMetrics = [];

  return (
    <div>
      <Dropdown onChange={dropdownSelect} />
      <MetricListItems />
      <MetricChart data={data} />
    </div>
  );
};

const dropdownSelect = selection => {
  console.log('Selection:', selection);
};

export default () => {
  return (
    <Provider value={client}>
      <Container>
        <h1>Metric Dashboard</h1>
        <Metrics />
      </Container>
    </Provider>
  );
};
