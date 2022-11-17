import { useState, createContext, useCallback, useEffect } from "react";
import axios from "axios";

const Context = createContext();

export function ContextProvider(props) {
  const [pageDetails, setPageDetails] = useState(null);

  const getDataHandler = useCallback(() => {
    console.log("hello");
    axios
      .get("data.json")
      .then((res) => {
        setPageDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getDataHandler();
  }, [getDataHandler]);

  return (
    <Context.Provider value={pageDetails}>{props.children}</Context.Provider>
  );
}

export default Context;
