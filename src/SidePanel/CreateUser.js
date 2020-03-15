import React, { Component } from "react";
import EditUserForm from "../Components/EditUserForm";
import { createUser } from "../API";
import { SuccessMsg, FailureMsg } from "../Components/ResponseMessage";
import { toggleLoader } from "../Reducers/Effects";
import { connect } from "react-redux";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuccess: false,
      success_Msg: "",
      failure_Msg: "",
      showFailure: false
    };
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.loaderToggler(true);

    createUser(e).then(res => {
      this.props.loaderToggler(false);
      console.log(res);
      if (res.status === 201) {
        this.helperMethod();
      } else {
        this.setState({
          showFailure: true,
          failure_Msg: res.message
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

  helperMethod() {
    this.setState({
      showSuccess: true,
      success_Msg: "User Created Successfully!"
    });
    setTimeout(() => {
      this.props.history.push("/user/all");
    }, 1000);
  }

  render() {
    return (
      <div>
        <h3>Create Account</h3>
        <EditUserForm text="Create" submit={this.onSubmit.bind(this)} />
        {this.state.showSuccess ? (
          <SuccessMsg msg={this.state.success_Msg} />
        ) : null}
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

export default connect(null, mapDispatchToProps)(CreateUser);
