import React, { useState, useCallback } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'

import './Login.styles.css';

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: '30px',
    fontSize: '24px',
  },
  textField: {
    marginBottom: '20px',
  },
  button: {
    marginTop: '30px'
  },
  errorBanner: {
    background: '#ff0a05',
    color: 'white',
    padding: '15px'
  }
}));

const _Login = ({ history }) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isIncorrect, setIsIncorrect] = useState(false);

  const loginUser = useCallback(
    () => {
      if (!(name === 'username' && password === 'correct')) return setIsIncorrect(true);

      history.push('/');
    },
    [history, name, password],
  );

  return (
    <div className="main-login-form">
      <Paper className="main-login-form__card">
        <Typography className={classes.header} color="textSecondary" gutterBottom>
          Login
        </Typography>
        <FormControl>
          {isIncorrect && <Paper className={classes.errorBanner}>Credentials are incorrect</Paper>}
          <TextField
            id="name"
            label="Name"
            margin="normal"
            variant="outlined"
            className={classes.textField}
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            margin="normal"
            variant="outlined"
            className={classes.textField}
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <Button onClick={loginUser} disabled={!name || !password} variant="contained" color="primary" className={classes.button}>
            Login
          </Button>
        </FormControl>
      </Paper>
    </div>
  );
};

const Login = withRouter(_Login);

export { Login };