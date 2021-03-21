import React from "react";
import { useState } from "react";
import firebase from "firebase/app";
import {
  Button,
  ButtonGroup,
  Grid,
  makeStyles,
  Paper,
  TextField
} from "@material-ui/core";
const useStyles = makeStyles({ button: { marginBottom: "24px" } });

const ButtonStyled = ({ value }) => {
  const classes = useStyles();
  return (
    <Button variant="contained" color="primary" className={classes.button}>
      {value}
    </Button>
  );
};

const Login = () => {
  const [userNumber, setUserNumber] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const paperStyle = {
    padding: 20,
    height: "48vh",
    width: 352,
    margin: "24px auto",
    color: "#949398"
  };

  async function login() {
    try {
      await firebase.login(userNumber, userPassword);
      // history.replace("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Grid align="center">
      <Paper elevation={8} style={paperStyle}>
        <p>Hello Guest!</p>
        <ButtonGroup
          style={{ marginTop: "48px" }}
          orientation="vertical"
          fullWidth
        >
          <TextField
            label="Phone number"
            placeholder="Enter phone number"
            style={{ marginBottom: "16px" }}
            variant="outlined"
            fullWidth
            required
            onChange={(e) => setUserNumber(e.target.value)}
            value={userNumber}
          />
          <ButtonStyled value="Send SMS"></ButtonStyled>
          <TextField
            label="Verification code"
            placeholder="Verification code"
            type="password"
            style={{ marginBottom: "16px" }}
            variant="outlined"
            fullWidth
            required
            onChange={(e) => setUserPassword(e.target.value)}
            onClick={login}
            value={userPassword}
          />
          <ButtonStyled value="Verify"></ButtonStyled>
        </ButtonGroup>
      </Paper>
    </Grid>
  );
};

export default Login;
