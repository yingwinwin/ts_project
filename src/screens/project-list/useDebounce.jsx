import { useState, useEffect } from "react"

const useDebounce = (value, delay) => {
    const [debounceParam, setDebounceParam] = useState(value);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebounceParam(value);
      }, delay);
    
      return () => {
        clearTimeout(timer)
      }
    }, [value, delay])

    return debounceParam
}

export default useDebounce;