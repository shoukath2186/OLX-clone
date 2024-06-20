

import React, { createContext, useState } from "react";

export const ProductCom = createContext(null);


const ProviderComponent = ({ children }) => {
  const [userData, setUserData] = useState(null);

  
  const setUserAndData = (user, data) => {
    setUserData({ user,data });
  };

  return (
    <ProductCom.Provider value={{ userData, setUserAndData }}>
      {children}
    </ProductCom.Provider>
  );
};

export default ProviderComponent;