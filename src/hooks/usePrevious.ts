import { useEffect, useRef } from "react";

const usePrevious = <T>(value: T): T | undefined => {
  const prevValueRef = useRef<T>();

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return prevValueRef.current;
};

export default usePrevious;
