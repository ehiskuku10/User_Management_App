import React from "react"

function SidePanel (props) {
  return(
    <div className="side-panel">
      {props.children}
    </div>
  )
}

export default SidePanel