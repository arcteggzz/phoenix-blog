import { useEffect, createContext, useContext } from "react";
import { AppContextProvider } from "./context/AppContext";
import { AppContext } from "./context/AppContext";

const App = () => {
  const theme = useContext(AppContext);

  useEffect(() => {
    console.log({ theme });
  }, []);

  return (
    <>
      <AppContextProvider>
        <div>Tega Base</div>
      </AppContextProvider>
    </>
  );
};

export default App;
