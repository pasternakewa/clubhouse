import React from "react";
import {
  Avatar,
  Button,
  ButtonGroup,
  Grid,
  makeStyles,
  Paper
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";

const useStyles = makeStyles({ button: { marginBottom: "24px" } });

const ButtonStyled = ({ value }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      fullWidth
    >
      {value}
    </Button>
  );
};

const HomePage = () => {
  const paperStyle = {
    padding: 20,
    height: "48vh",
    width: 352,
    margin: "24px auto",
    color: "#949398"
  };

  return (
    <Grid align="center">
      <Paper elevation={8} style={paperStyle}>
        <Avatar style={{ backgroundColor: "#3f51b5" }}>
          <LockOutlinedIcon />
        </Avatar>
        <p>Hello Guest!</p>
        <ButtonGroup
          style={{ marginTop: "48px" }}
          orientation="vertical"
          fullWidth
        >
          <Link to="/register">
            <ButtonStyled value="Register"></ButtonStyled>
          </Link>
          <Link to="/login">
            <ButtonStyled value="Login"></ButtonStyled>
          </Link>
          <Link to="/invite">
            <ButtonStyled value="Invite"></ButtonStyled>
          </Link>
        </ButtonGroup>
      </Paper>
    </Grid>
  );
};

export default HomePage;
