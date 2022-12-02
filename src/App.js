import React from "react";
import Add from "./Components/Add";
import Follow from "./Components/Follow";
import Following from "./Components/Following";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{width:"600px", justifyContent: "center","boxShadow":" rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        <Add />
        <Follow />
      </div>
      <div>
        {" "}
        <Following />
      </div>
    </div>
  );
}

export default App;
