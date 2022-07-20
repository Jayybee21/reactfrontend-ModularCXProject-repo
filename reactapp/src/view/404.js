import React from "react";
import img from "./../images/error404.png";
function Error() {
  return (
    <>
      <div className="transparent-container">
        <div className="transparent-leftside">
            <img className="imgerr"src={img} alt="err image"></img>
        </div>
        <div className="transparent-rightside">
        <h1>ERROR</h1>
        <h3>Page not found</h3>
        </div>
      </div>
    </>
  );
}

export default Error;