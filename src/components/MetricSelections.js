import React from 'react';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const MetricListItems = () => {
  return (
    <div>
      <List
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Selected Metrics
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemText primary="Metric" secondary="Metric Value" />
        </ListItem>
      </List>
    </div>
  );
};

export default MetricListItems;
