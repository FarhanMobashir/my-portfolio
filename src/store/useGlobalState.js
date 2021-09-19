import { useReducer } from "react";
import storage from "local-storage-fallback";

const reducer = (state, action) => {
  if (action.type === "TOGGLE_DARK_MODE") {
    storage.setItem("isDark", !state.isDark);
    return {
      isDark: !state.isDark,
    };
  }
  return state;
};

const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, {
    isDark: storage.getItem("isDark")
      ? JSON.parse(storage.getItem("isDark"))
      : false,
  });
  return { state, dispatch };
};

export default useGlobalState;
