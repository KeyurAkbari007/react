import AppContext from "./appcontext";

import React, { useState } from "react";

const AppState = (props) => {
  const data = {
    name: "keyur",
    age: 18,
  };
  const [state, setState] = useState(data);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "keyur patel",
        age: 20,
      });
    }, 1000);
  };
  return (
    <AppContext.Provider value={{ state, update }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
