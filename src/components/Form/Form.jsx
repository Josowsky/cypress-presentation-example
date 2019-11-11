import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import './Form.styles.css';

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: '30px',
    fontSize: '24px',
  },
  textField: {
    marginBottom: '60px',
  },
}));

const Form = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [isSelectOpened, setIsSelectOpened] = useState(false);

  return (
    <div className="main-form">
      <Paper className="main-form__card">
        <Typography id="header" className={classes.header} color="textSecondary" gutterBottom>
          {name} {surname} &nbsp;
        </Typography>
        <FormControl>
          <TextField
            id="name"
            label="Name"
            margin="normal"
            variant="outlined"
            className={classes.textField}
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <Select
            id="surname"
            open={isSelectOpened}
            onClose={() => setIsSelectOpened(false)}
            onOpen={() => setIsSelectOpened(true)}
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Stark'}>Stark</MenuItem>
            <MenuItem value={'Lannister'}>Lannister</MenuItem>
            <MenuItem value={'Tarly'}>Tarly</MenuItem>
          </Select>
        </FormControl>
      </Paper>
    </div>
  );
};

export { Form };