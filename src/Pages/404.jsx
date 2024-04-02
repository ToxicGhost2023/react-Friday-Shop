import React from "react";
import Error from "../photos/Error.png";
const PageNotFound = () => {
  return (
    <div>
      <img src={Error} alt={Error} style={{ marginLeft: 150 }} />
    </div>
  );
};

export default PageNotFound;
