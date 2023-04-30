import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = ({ path }) => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => --prevCount);
    }, 1000);

    count === 0 && navigate(path);

    return () => clearInterval(interval);
  }, [count, navigate, path]);

  return (
    <div>
      <p>Redirecting you after {count} seconds</p>
    </div>
  );
};

export default LoadingToRedirect;
