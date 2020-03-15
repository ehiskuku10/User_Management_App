import React, { Component } from "react"
import { oneUser, editUser, removeUser } from "../API"
import UserCard from "../Components/UserCard"
import EditUserForm from "../Components/EditUserForm"
import { SuccessMsg, FailureMsg } from "../Components/ResponseMessage"

const hideBlock = {
  display: "none"
}

class SingleUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      displayForm: false,
      showSuccess: false,
      showFailure: false,
      success_msg: "",
      failure_msg: ""
    }
  }

  componentDidMount() {
    const { match } = this.props;
    const userId = match.params.userId;
    oneUser(userId).then(res => {
      console.log(res)
      if (res.status === 200) {
        this.setState({
          user: res.data.data
        });
      } else {
        this.setState({
          showFailure: true,
          failure_msg: res.message
        });
      }
      this.setState({
        user: res.data.data
      });
    });
  }

  showForm() {
    this.setState({
      displayForm: true
    })
  }

  onSubmit (e) {
    const userId = e.target.id
    e.preventDefault();
    editUser(e, userId).then(res => {
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

  deleteUser (e) {
    const userId = e.target.id
    removeUser(userId)
      .then(res => {
        if(res.status === 204) {
          this.helperMethod()
        } else {
          this.setState({
            showFailure: true,
            failure_Msg: res.message
          });
        }
      })
  }

  helperMethod () {
    this.setState({
      showSuccess: true,
      success_msg: "User Created Successfully!"
    })
    setTimeout(() => {
      this.props.history.push('/user/all');
    }, 1000)
  }

  render() {
    return (
      <div>
        <h3>UserID: {this.state.user._id}</h3>
        <UserCard user={this.state.user} />
        <div className="btn-block" style={this.state.displayForm ? hideBlock : null}>
          <button onClick={this.showForm.bind(this)}>Edit</button>
          <button id={this.state.user._id} onClick={this.deleteUser.bind(this)}>Delete</button>
        </div>
        {this.state.displayForm ? <EditUserForm id={this.state.user._id} text="Update" submit={this.onSubmit.bind(this)} /> : null}
        {this.state.showSuccess ? <SuccessMsg msg={this.state.success_msg} /> : null}
        {this.state.showSuccess ? <FailureMsg msg={this.state.failure_msg} /> : null}
      </div>
    )
  }
}

export default SingleUser