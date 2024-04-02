import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <div
     
    >
      <ThreeDots  style={{
        width: "100%",
        textAlign:"center",
        height: "1000px",
        marginTop: "300px",
      }}
        visible={true}
        height="100px"
        width="100px"
        color="#0667b6"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
