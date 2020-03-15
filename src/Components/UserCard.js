import React from "react"

const UserCard = (props) => {
  const {first_name, last_name} = props.user
  return (
    <div className="list-item__box">
      <span>{last_name} {first_name}</span>
    </div>
  )
}

export default UserCard