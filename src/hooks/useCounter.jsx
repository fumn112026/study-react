import { useCallback, useState } from "react";


export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, isShow, handleCount, handleDisplay };
};
