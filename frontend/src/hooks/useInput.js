import { useState } from "react";

export function useInput(value, validationFn) {
  const [state, setState] = useState({
    value,
    isBlured: false,
  });
  const isValid = validationFn(state);
  function onBlur() {
    setState((s) => ({ ...s, isBlured: true }));
  }

  function onChange(e) {
    setState((s) => ({
      ...s,
      value: e.target.value,
    }));
  }
  return {
    onBlur,
    onChange,
    isValid,
    isBlured: state.isBlured,
    value: state.value,
  };
}
