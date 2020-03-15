import React, { Component } from "react";
import EditUserForm from "../Components/EditUserForm";
import { createUser } from "../API";
import { SuccessMsg, FailureMsg } from "../Components/ResponseMessage";

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
    createUser(e)
      .then(res => {
        console.log(res);
        if (res.status === 201) {
          this.helperMethod();
        } else {
          this.setState({
            showFailure: true,
            failure_Msg: res.message
          });
        }
      })
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
        {this.state.showSuccess ? <SuccessMsg msg={this.state.success_Msg}/> : null}
        {this.state.showFailure ? <FailureMsg msg={this.state.failure_Msg}/> : null}
      </div>
    );
  }
}

export default CreateUser;
