import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import fileUpload from "./fileUpload";

function uploadView() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div style={{ margin: "20px" }}>
        <h3>bezkoder.com</h3>
        <h4>React upload Files</h4>
      </div>

      <fileUpload />
    </div>
  );
}

export default uploadView;