import React, { createContext, useState } from "react";

export const appContext = createContext();

function AppContext({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const updateIsExpanded = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  const appStates = {
    isExpanded: isExpanded,
    setIsExpanded: updateIsExpanded,
  };
  return (
    <appContext.Provider value={appStates}>{children}</appContext.Provider>
  );
}

export default AppContext;
