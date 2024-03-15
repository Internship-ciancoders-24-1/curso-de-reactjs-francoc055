import React, { useState, useEffect } from "react";

function PageLoading() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 3) {
          return "";
        } else {
          return prevDots + ".";
        }
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Loading{dots}</h2>
    </div>
  );
}

export default PageLoading;
