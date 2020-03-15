import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to={`/user/add`}>Add user account</Link>
        </li>
        <li>
          <Link to={`/user/all`}>Get existing accounts</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
