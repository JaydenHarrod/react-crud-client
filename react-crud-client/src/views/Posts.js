import { connect } from "react-redux";
import * as postActions from "../contexts/actions/postActions";
import Posts from "../components/Posts";

const mapStateToProps = (state, ownProps) => {
  return {
    mappedPostState: state.postState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(postActions.fetchPosts()),
    mappedDeletePost: postToDelete =>
      dispatch(postActions.deletePost(postToDelete))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
