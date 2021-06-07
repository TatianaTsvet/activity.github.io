import React, { Component } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Grid } from "@material-ui/core";

import "./skeleton.scss";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: "white",
    height: "11rem",

    marginBottom: "1em",
    padding: "1em",
  },
});

class SkeletonInList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        item
        className={classes.root}
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        <Skeleton
          variant="rect"
          width="10%"
          height={20}
          animation="wave"
          style={{ borderRadius: 10 }}
        />
        <Skeleton
          animation="wave"
          height={50}
          width="60%"
          style={{ marginTop: 4 }}
        />
        <Skeleton
          animation="wave"
          height={20}
          width="15%"
          style={{ marginTop: 4 }}
        />
        <Skeleton
          variant="rect"
          width="10%"
          height={25}
          animation="wave"
          style={{ marginTop: 8, borderRadius: 10 }}
        />
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SkeletonInList);
