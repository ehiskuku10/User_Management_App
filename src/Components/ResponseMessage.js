import React from "react"

export const SuccessMsg = (props) => {
  return <div className="success_msg">{props.msg}</div>
}

export const FailureMsg = (props) => {
  return <div className="failure_msg">{props.msg}</div>
}