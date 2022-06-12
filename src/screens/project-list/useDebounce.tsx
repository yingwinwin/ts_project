import { useState, useEffect } from "react";

const useDebounce = <V,>(value: V, delay: number) => {
  const [debounceParam, setDebounceParam] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceParam(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceParam;
};

export default useDebounce;
