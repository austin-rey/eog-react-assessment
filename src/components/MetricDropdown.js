import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Dropdown = ({ onChange }) => {
  const classes = useStyles();

  const [metric, setActiveMetric] = React.useState('');

  const dropDownChange = e => {
    let selection = e.target.value;
    onChange(selection);
    setActiveMetric(selection);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="metric-input-label">Select...</InputLabel>
        <Select labelId="metric-select-label" id="metric-select" value={metric} onChange={dropDownChange}>
          <MenuItem value={'flareTemp'}>flareTemp</MenuItem>
          <MenuItem value={'waterTemp'}>waterTemp</MenuItem>
          <MenuItem value={'oilTemp'}>oilTemp</MenuItem>
          <MenuItem value={'tubingPressure'}>tubingPressure</MenuItem>
          <MenuItem value={'injValveOpen'}>injValveOpen</MenuItem>
        </Select>
        <FormHelperText>Select a metric above to populate the chart.</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Dropdown;
