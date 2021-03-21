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

const useStyles = makeStyles({ root: { marginBottom: "24px" } });

const ButtonStyled = ({ value }) => {
  const classes = useStyles();
  return (
    <Button variant="contained" color="primary" className={classes.root}>
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
          <ButtonStyled value="Register"></ButtonStyled>
          <ButtonStyled value="Login"></ButtonStyled>
          <ButtonStyled value="Invite"></ButtonStyled>
        </ButtonGroup>
      </Paper>
    </Grid>
  );
};

export default HomePage;
