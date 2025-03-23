import React, { useEffect, useState } from 'react';

export default function Meditation() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState(null);

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
      setSessionType(null); // Reset session type when timer ends
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = (duration) => {
    setTimeLeft(duration * 60);
    setIsRunning(true);
    setSessionType(duration); // Set session type based on duration
  };

  const renderSessionContent = () => {
    switch (sessionType) {
      case 5:
        return (
          <div className="mt-5 text-center">
            <h2 className="text-2xl font-bold text-[#2396ff]">5-Minute Breathing Exercise (Quick Stress Relief)</h2>
            <p className="text-gray-400">Purpose: A short breathing technique to reduce stress, improve focus, and calm your mind.</p>
            <ul className="list-disc list-inside text-left mt-3">
              <li>Find a Comfortable Position – Sit or lie down in a quiet place. Keep your back straight but relaxed.</li>
              <li>Close Your Eyes & Relax – Gently close your eyes and take a moment to release any tension.</li>
              <li>Inhale Slowly (4 Seconds) – Breathe in deeply through your nose, allowing your belly to expand.</li>
              <li>Hold Your Breath (2 Seconds) – Pause for a moment, keeping the air in your lungs.</li>
              <li>Exhale Gently (6 Seconds) – Slowly breathe out through your mouth, letting go of any tension.</li>
              <li>Repeat for 5 Minutes – Continue this rhythmic breathing, focusing only on your breath.</li>
              <li>Gently Return – Slowly open your eyes and stretch lightly before resuming your day.</li>
            </ul>
            <p className="mt-3 text-gray-400">💡 Tip: If your mind wanders, gently bring your focus back to your breath.</p>
          </div>
        );
      case 10:
        return (
          <div className="mt-5 text-center">
            <h2 className="text-2xl font-bold text-[#2396ff]">10-Minute Mindfulness Meditation (For Awareness & Relaxation)</h2>
            <p className="text-gray-400">Purpose: Helps you stay present, reduce anxiety, and increase mental clarity.</p>
            <ul className="list-disc list-inside text-left mt-3">
              <li>Find a Quiet Place – Sit in a comfortable position with a straight back. You can also lie down if preferred.</li>
              <li>Close Your Eyes & Breathe Naturally – No need to control your breath, just observe it.</li>
              <li>Bring Attention to the Present – Focus on the sensation of your breath entering and leaving your body.</li>
              <li>Observe Your Thoughts – If thoughts arise, don’t judge them. Just acknowledge and let them pass.</li>
              <li>Focus on the Present Moment – Pay attention to sensations like your heartbeat, body warmth, or sounds around you.</li>
              <li>Use a Simple Mantra (Optional) – Repeat a calming word like peace, calm, or relax with each breath.</li>
              <li>Gently Return – After 10 minutes, open your eyes, take a deep breath, and slowly return to your surroundings.</li>
            </ul>
            <p className="mt-3 text-gray-400">💡 Tip: Don’t try to force relaxation. Just be aware and let go of any tension naturally.</p>
          </div>
        );
      case 20:
        return (
          <div className="mt-5 text-center">
            <h2 className="text-2xl font-bold text-[#2396ff]">20-Minute Deep Relaxation (Full-Body Calmness)</h2>
            <p className="text-gray-400">Purpose: A deep relaxation exercise that relieves stress, tension, and prepares you for sleep or deep focus.</p>
            <ul className="list-disc list-inside text-left mt-3">
              <li>Find a Comfortable Position – Lie down on your back or sit in a relaxed position.</li>
              <li>Close Your Eyes & Breathe Deeply – Take slow, deep breaths to settle into relaxation.</li>
              <li>Body Scan Relaxation – Bring attention to different parts of your body:</li>
              <ul className="list-disc list-inside ml-5">
                <li>Start with your toes, notice any tension, and relax them.</li>
                <li>Move to your feet, then your legs, consciously relaxing each area.</li>
                <li>Continue scanning upwards: hips, abdomen, chest, shoulders, arms, hands, neck, and face.</li>
              </ul>
              <li>Visualize a Calm Place – Imagine yourself in a peaceful location (like a beach or forest). Feel the warmth, hear the sounds, and immerse yourself in it.</li>
              <li>Let Go of Stress – With each exhale, imagine tension leaving your body.</li>
              <li>Stay in This State for 20 Minutes – Let your body completely relax. If your mind wanders, gently bring it back to your breath.</li>
              <li>Slowly Wake Up – After 20 minutes, wiggle your fingers and toes, stretch gently, and open your eyes.</li>
            </ul>
            <p className="mt-3 text-gray-400">💡 Tip: Try this before sleep for deep relaxation and better rest.</p>
          </div>
        );
      default:
        return null;
    }
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
      {renderSessionContent()}
    </div>
  );
}