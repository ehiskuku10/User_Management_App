import React, { Component } from "react";
import { allUsers } from "../API";
import { Link } from "react-router-dom";
import UserCard from "../Components/UserCard";
import { FailureMsg } from "../Components/ResponseMessage";
import { toggleLoader } from "../Reducers/Effects";
import { connect } from "react-redux";

class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      failure_Msg: "",
      showFailure: false
    };
  }

  componentDidMount() {
    this.props.loaderToggler(true);

    allUsers().then(res => {
      this.props.loaderToggler(false);
      console.log(res);
      if (res.status === 200) {
        this.setState({
          users: res.data.data
        });
      } else {
        this.setState({
          showFailure: true,
          failure_Msg: res.message
        });
        setTimeout(() => {
          this.props.history.push("/user/add");
        }, 1000);
      }
    });
  }

  render() {
    return (
      <div>
        <h3>All Users</h3>
        <ul className="user-list">
          {this.state.users.map((user, index) => (
            <li key={index}>
              <Link to={`/user/${user._id}`}>
                <UserCard user={user} />
              </Link>
            </li>
          ))}
        </ul>
        {this.state.showFailure ? (
          <FailureMsg msg={this.state.failure_Msg} />
        ) : null}
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
  loaderToggler: option => dispatch(toggleLoader(option))
});

export default connect(null, mapDispatchToProps)(AllUsers);
