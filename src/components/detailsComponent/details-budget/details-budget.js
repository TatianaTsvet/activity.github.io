import React, { Component } from "react";

import PropTypes from "prop-types";
import { Slider, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "./details-budget.scss";
import { connect } from "react-redux";
import { updateDetailsBudget } from "../../../saga/actions";

const styles = (theme) => ({
  root: {
    color: "#fff",
    marginBottom: "1em",
    textTransform: "lowercase",
  },
});

const marks = [
  {
    value: 0,
    label: "cheap",
  },

  {
    value: 1,
    label: "expensive",
  },
];

class DetailsBudget extends Component {
  onChange = (event, newValue) => {
    const [minValue, maxValue] = newValue;
    const minprice = Number.parseFloat(minValue);
    const maxprice = Number.parseFloat(maxValue);
    this.props.updateDetailsBudget(minprice, maxprice);
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography id="range-slider" gutterBottom>
          max budget
        </Typography>
        <Slider
          className={classes.root}
          valueLabelDisplay="auto"
          scale={(x) => `${x * 100}%`}
          aria-labelledby="range-slider"
          onChange={this.onChange}
          min={0}
          max={1}
          step={0.1}
          defaultValue={[0, 1]}
          marks={marks}
        />
      </>
    );
  }
}
DetailsBudget.defaultProps = {
  minValue: 0,
  maxValue: 1,
};
DetailsBudget.propTypes = {
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    minprice: state.detailReducers.details.minprice,
    maxprice: state.detailReducers.details.maxprice,
  };
};

export default connect(mapStateToProps, {
  updateDetailsBudget,
})(withStyles(styles, { withTheme: true })(DetailsBudget));