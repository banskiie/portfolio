import React, { createContext, useState } from "react";

export const AnimationContext = createContext({
  isNavbarPresent: false,
});

function AnimationContextProvider(props) {
  const [isNavbarPresent, setIsNavbarPresent] = useState(false);

  setTimeout(() => {
    setIsNavbarPresent(true);
  }, 2000);

  return (
    <AnimationContext.Provider value={{ isNavbarPresent: isNavbarPresent }}>
      {props.children}
    </AnimationContext.Provider>
  );
}

export default AnimationContextProvider;
