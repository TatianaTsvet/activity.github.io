import MyList from "./my-list";
import { switchSkelet, closeToast, postIsVisible } from "../../../saga/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    activity: state.mainReducers.activity,
    skeletonLoading: state.serviceReducers.skeletonLoading,
    isVisible: state.serviceReducers.isVisible,
  };
};

export default connect(mapStateToProps, {
  switchSkelet,
  closeToast,
  postIsVisible,
})(MyList);
