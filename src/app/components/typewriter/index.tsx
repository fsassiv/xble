'use client';
import Typewriter from 'typewriter-effect';
import { techWordsNoBle } from '../../words';

export const TypewriterComponent = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        [X]BLE
      </h1>
      <h1 className="font-[100] text-4xl flex text-white">
        <Typewriter
          options={{
            strings: techWordsNoBle,
            autoStart: true,
            loop: true,
            // @ts-expect-error - no one knows
            pauseFor: 1000,
          }}
        />
        <b>ble</b>
      </h1>
    </div>
  );
};
