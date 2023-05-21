import React, { useContext } from "react";
import AppContext from "../allcontext/appcontext";

const Home = () => {
  const data = useContext(AppContext);
  return (
    <div>
      Home <h1>{data.state.name}</h1>
      <button
        onClick={() => {
          data.update();
          console.log("click");
        }}
      >
        Click here
      </button>
    </div>
  );
};

export default Home;
