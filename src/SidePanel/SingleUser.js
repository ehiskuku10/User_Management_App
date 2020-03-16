import React, { Component } from "react";
import { oneUser, editUser, removeUser } from "../API";
import UserCard from "../Components/UserCard";
import EditUserForm from "../Components/EditUserForm";
import { SuccessMsg, FailureMsg } from "../Components/ResponseMessage";
import { toggleLoader } from "../Reducers/Effects";
import { connect } from "react-redux";

const hideBlock = {
  display: "none"
};

class SingleUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      displayForm: false,
      showSuccess: false,
      showFailure: false,
      success_msg: "",
      failure_msg: ""
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const userId = match.params.userId;
    this.props.loaderToggler(true);

    oneUser(userId).then(res => {
      this.props.loaderToggler(false);
      console.log(res);
      if (res.status === 200) {
        this.setState({
          user: res.data.data
        });
      } else {
        this.setState({
          showFailure: true,
          failure_msg: res.message
        });
        setTimeout(() => {
          this.setState({
            showFailure: false,
            failure_Msg: ""
          });
        }, 2000);
      }
    });
  }

  showForm() {
    this.setState({
      displayForm: true
    });
  }

  onSubmit(e) {
    const userId = e.target.id;
    e.preventDefault();
    this.props.loaderToggler(true);

    editUser(e, userId).then(res => {
      this.props.loaderToggler(true);
      if (res.status === 201) {
        this.helperMethod();
      } else {
        this.setState({
          showFailure: true,
          failure_Msg: res.message
        });
      }
    });
  }

  deleteUser(e) {
    const userId = e.target.id;
    this.props.loaderToggler(true);

    removeUser(userId).then(res => {
      this.props.loaderToggler(false);
      if (res.status === 204) {
        this.setState({
          showSuccess: true,
          success_msg: "Account Deleted Successfully!"
        });
        setTimeout(() => {
          this.props.history.push("/user/all");
        }, 1000);
      } else {
        this.setState({
          showFailure: true,
          failure_Msg: res.message
        });
      }
    });
  }

  helperMethod() {
    this.setState({
      showSuccess: true,
      success_msg: "User Updated Successfully!"
    });
    setTimeout(() => {
      this.props.history.push("/user/all");
    }, 1000);
  }

  render() {
    let dob = new Date(this.state.user.dob);
    dob = dob
      .toString()
      .replace(/-/g, "/")
      .substr(0, 16);
    return (
      <div>
        <h5>
          <b>UserID:</b> {this.state.user._id}
        </h5>
        <h5>
          <b>Phone:</b> {this.state.user.phone_no}
        </h5>
        <h5>
          <b>Address:</b> {this.state.user.address}
        </h5>
        <h5>
          <b>DOB:</b> {dob}
        </h5>
        <UserCard user={this.state.user} />
        <div
          className="btn-block"
          style={this.state.displayForm ? hideBlock : null}
        >
          <button onClick={this.showForm.bind(this)}>Edit</button>
          <button id={this.state.user._id} onClick={this.deleteUser.bind(this)}>
            Delete
          </button>
        </div>
        {this.state.displayForm ? (
          <EditUserForm
            id={this.state.user._id}
            text="Update"
            submit={this.onSubmit.bind(this)}
          />
        ) : null}
        {this.state.showSuccess ? (
          <SuccessMsg msg={this.state.success_msg} />
        ) : null}
        {this.state.showFailure ? (
          <FailureMsg msg={this.state.failure_msg} />
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loaderToggler: option => dispatch(toggleLoader(option))
});

export default connect(null, mapDispatchToProps)(SingleUser);
