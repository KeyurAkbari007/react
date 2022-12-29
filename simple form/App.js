import { useState } from "react";
import "./styles.css";
export default function App() {
  const [temp, settemp] = useState({});
  const [data, setdata] = useState({});
  return (
    <>
      <div id="container">
        <h1 className="name">Hello {data.name} </h1>
        <div className="inputdiv">
          <input
            className="input"
            type="text"
            value={temp.name || ""}
            placeholder="please enter your name"
            onChange={(e) => {
              settemp({ ...temp, name: e.target.value });
            }}
          ></input>
          <input
            className="input"
            type="password"
            value={temp.password || ""}
            placeholder="please enter your password"
            onChange={(e) => {
              settemp({ ...temp, password: e.target.value });
            }}
          ></input>
        </div>
        <div className="btn">
          <button
            id="button"
            onClick={() => {
              console.log(temp);
              setdata(temp);
              // settemp("");
            }}
          >
            click here
          </button>
        </div>
      </div>
    </>
  );
}
