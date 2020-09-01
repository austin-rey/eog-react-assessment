import React from 'react';
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

const onChange = () => {
  console.log('Dropdown selection');
};

const Dropdown = () => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="metric-input-label">Select...</InputLabel>
        <Select labelId="metric-select-label" id="metric-select" value={''} onChange={onChange}>
          <MenuItem value="" disabled>
            None
          </MenuItem>
          <MenuItem value={''}>Metric</MenuItem>
          <MenuItem value={''}>Metric</MenuItem>
          <MenuItem value={''}>Metric</MenuItem>
          <MenuItem value={''}>Metric</MenuItem>
        </Select>
        <FormHelperText>Select a metric above to populate the chart.</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Dropdown;
