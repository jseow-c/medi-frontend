// The hook
import { useEffect, useRef } from "react";

const addHandler = handler => window.addEventListener("beforeunload", handler);
const removeHandler = handler =>
  window.removeEventListener("beforeunload", handler);

const useWindowUnloadEffect = (handler, callOnCleanup) => {
  const prevHandler = useRef(null);

  useEffect(() => {
    if (prevHandler.current) removeHandler(prevHandler.current); // remove the the current event listener, if one exists

    prevHandler.current = handler;

    addHandler(handler);

    return () => {
      if (callOnCleanup) handler();

      removeHandler(handler);
    };
  }, [handler]);
};

export default useWindowUnloadEffect;
