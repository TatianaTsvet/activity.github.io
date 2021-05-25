import React, { Component } from "react";
import { Container, Paper, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { addItemToMyList, showSuccess, activitiesInList } from "../../actions";

import "./activities-result.scss";

const styles = (theme) => ({
  button: {
    margin: "2em auto",
    display: "flex",
    justifyContent: "center",
  },
});

class ActivitiesResult extends Component {
  sendToMyList = () => {
    const { randomActivity } = this.props;
    this.props.addItemToMyList(randomActivity);
    this.props.activitiesInList(this.props.activity);
    this.props.showSuccess(true);
  };

  render() {
    const { randomActivity, error, classes } = this.props;

    const showButton = !error && randomActivity;
    const activityComponent = randomActivity ? (
      <Paper className="result_window">{randomActivity.activity}</Paper>
    ) : (
      <Paper className="result_window invitation">Choose any activity</Paper>
    );

    return (
      <>
        <Container>
          <Typography variant="h5" gutterBottom>
            You should
          </Typography>
          {error ? (
            <Paper className="result_window error">{error}</Paper>
          ) : (
            activityComponent
          )}

          {showButton && (
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={this.sendToMyList}
              size="medium"
            >
              Save for you later
            </Button>
          )}
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    randomActivity: state.randomActivity,
    error: state.error,
    activity: state.activity,
  };
};

export default connect(mapStateToProps, {
  addItemToMyList,
  activitiesInList,
  showSuccess,
})(withStyles(styles, { withTheme: true })(ActivitiesResult));
