
import React, { useState, createContext } from "react";

export const CounterContext = createContext();

export const CounterContextProvider = props => {
  const [data, setData] = useState({
    counter: 1
  });

  const setCorrectedData = (value) => {
    setData({ counter: value < 1 ? 1 : value < 1001 ? value : 1000 });
  }

  return (
    <CounterContext.Provider value={[data, setCorrectedData]}>
      {props.children}
    </CounterContext.Provider>
  );
};