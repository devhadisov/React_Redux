import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

import hotelimg from "./assets/hotelmark.png";
import hotelexterior from "./assets/hotelexterior.jpg";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  hotel: {
    height: "100%",
    width: "100%"
  },
  appbar: {
    flexGrow: 1
  },
  toolbar: {
    display: "flex",
    width: "100%",
    height: 64,
    // backgroundColor: '#171313'
    backgroundColor: "black"
  },
  textbutton: {
    backgroundColor: '#232323'
    // backgroundColor: "black"

  },
  text: {
    position: "absolute",
    // left: theme.spacing.unit * 24
    left: "calc((100% - 170px) / 2)"
  },
  hotelmark: {
    position: "absolute",
    width: "40px",
    height: "30px",
    right: theme.spacing.unit * 7
  },
  hotelimg: {
    position: "absolute",
    top: theme.spacing.unit * 13,
    width: "460px",
    height: "240px",
    left: "calc((100% - 460px) / 2)",
    backgroundColor: "white"
  },
  img: {
    position: "absolute",
    width: "450px",
    height: "230px",
    marginLeft: "5px",
    marginTop: "5px"
  },
  hoteldetail: {
    position: "absolute",
    top: theme.spacing.unit * 48,
    // left: theme.spacing.unit * 4,
    left: "calc((100% - 460px) / 2)"
  },
  detail: {
    color: "white"
  },
  detail1: {
    color: "#898fb3"
  },
  detail2: {
    color: "white",
    textDecoration: "underline"
  },
  list: {
    position: "absolute",
    top: theme.spacing.unit * 68,
    width: "460px",
    left: "calc((100% - 460px) / 2)"
  },
  listitem: {
    backgroundColor: "#9898bf",
    height: "60px"
  },
  paper: {
    borderRadius: "10px",
    backgroundColor: "#aeaedc",
    height: "300px"
  },
  listitemtext: {
    fontSize: "20px",
    fontWeight: "bold",
    marginLeft: "10px"
  }
});

class HotelDetail extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.hotel}>
          <div className={classes.appbar}>
            <AppBar position="static">
              <Toolbar className={classes.toolbar}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.textbutton}
                >
                  &#60; Back
                </Button>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.text}
                >
                  Hotel Details
                </Typography>
                <img
                  className={classes.hotelmark}
                  src={hotelimg}
                  alt={"hotelmark"}
                />
              </Toolbar>
            </AppBar>
          </div>

          <div className={classes.hotelimg}>
            <img
              className={classes.img}
              src={hotelexterior}
              alt={"hotelexterior"}
            />
          </div>

          <div className={classes.hoteldetail}>
            <Typography className={classes.detail} variant="h5">
              Hilton Chicago
            </Typography>
            <Typography className={classes.detail1} variant="h6">
              720 South Michigan Avenue
            </Typography>
            <Typography className={classes.detail1} variant="h6">
              Chicago, Illinos, 60605
            </Typography>
            <Typography className={classes.detail2} variant="h6">
              1-312-922-4400
            </Typography>
          </div>

          <div className={classes.list}>
            <List className={classes.paper}>
              <ListItem
                className={classes.listitem}
                key={0}
                role={undefined}
                dense
                button
              >
                <ListItemText className={classes.listitemtext} primary="Map" />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Comments">
                    <Icon className={classes.icon}>arrow_forward_ios</Icon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider light />
              <ListItem
                className={classes.listitem}
                key={1}
                role={undefined}
                dense
                button
              >
                <ListItemText
                  className={classes.listitemtext}
                  primary={"Photo gallery"}
                />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Comments">
                    <Icon className={classes.icon}>arrow_forward_ios</Icon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider light />
              <ListItem
                className={classes.listitem}
                key={0}
                role={undefined}
                dense
                button
              >
                <ListItemText
                  className={classes.listitemtext}
                  primary={"Amenities"}
                />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Comments">
                    <Icon className={classes.icon}>arrow_forward_ios</Icon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider light />
            </List>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(HotelDetail);
