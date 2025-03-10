import React, { useEffect, useState } from 'react';

export default function Meditation() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    document.title = 'Meditation';
  }, []);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = (duration) => {
    setTimeLeft(duration * 60);
    setIsRunning(true);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[url("bg-image.jpg")] h-screen bg-cover bg-center'>
      <h1 className='font-bold text-4xl text-[#2396ff] mb-10'>Meditation Sessions</h1>
      {timeLeft !== null && <div className='text-[#2396ff] text-2xl mb-5'>Time Left: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</div>}
      <div className='flex items-center justify-center gap-3 w-[100%]'>
        {[5, 10, 20].map((duration) => (
          <div key={duration} className='max-w-sm p-6 bg-[#598DEB40] rounded-lg shadow-s flex flex-col w-[100%]'>
            <h5 className='text-center mb-2 text-2xl font-extrabold tracking-tight text-black'>{duration}-Minute Breathing</h5>
            <p className='mb-3 font-normal text-gray-400 text-center'>{duration} mins</p>
            <button
              onClick={() => startTimer(duration)}
              className='px-3 py-2 text-sm font-medium text-center text-[#ffffff] bg-[#2396ff] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
