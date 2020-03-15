import React, { Component } from "react";
import { allUsers } from "../API";
import { Link } from "react-router-dom";
import UserCard from "../Components/UserCard";
import { FailureMsg } from "../Components/ResponseMessage";

class AllUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      failure_Msg: "",
      showFailure: false
    };
  }

  componentDidMount() {
    allUsers().then(res => {
      console.log(res)
      if (res.status === 200) {
        this.setState({
          users: res.data.data
        });
      } else {
        this.setState({
          showFailure: true,
          failure_Msg: res.message
        });
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
        {this.state.showFailure ? <FailureMsg msg={this.state.failure_Msg} /> : null}
      </div>
    );
  }
}

export default AllUser;
