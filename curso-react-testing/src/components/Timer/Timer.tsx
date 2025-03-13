import { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId: number;

    if (isActive && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(10);
  };

  return (
    <div>
      <h1>Tiempo restante: {time} segundos</h1>
      {!isActive ? (
        <button onClick={handleStart}>Iniciar</button>
      ) : (
        <button onClick={handleReset}>Reiniciar</button>
      )}
    </div>
  );
}

export default Timer;