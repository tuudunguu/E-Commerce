'use client';

import { Container } from './assets/Container';
import { useState, useEffect } from 'react';
import { SlEnvelopeOpen } from 'react-icons/sl';

export const Opt = () => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleInputChange = (value, index) => {
    const newCode = [...code];

    if (/^\d*$/.test(value)) {
      newCode[index] = value;
      setCode(newCode);
    }
  };

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [seconds]);

  return (
    <Container className="bg-[#f6f6f6]">
      <div className="w-will h-fit  px-[178px] pt-24 pb-40">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full h-fit flex flex-col justify-center items-center text-black">
          {/* Envelope Icon */}
          <div className="mb-4">
            <SlEnvelopeOpen className="w-16 h-16" />
          </div>

          {/* Title and Message */}
          <h2 className="font-bold text-xl mb-2">Баталгаажуулах</h2>
          <p className="text-gray-600 text-center mb-6">
            “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
          </p>

          {/* Verification Code Input */}
          <div className="flex space-x-4 mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                className="w-16 h-16 text-center text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={digit}
                onChange={(e) => handleInputChange(e.target.value, index)}
              />
            ))}
          </div>

          {/* Resend Button */}
          {seconds > 0 ? (
            <p className="text-gray-600">
              Дахин илгээх <span className="text-blue-500">({seconds})</span>
            </p>
          ) : (
            <button
              className="text-blue-500 hover:underline"
              onClick={() => setSeconds(60)} // Reset timer on resend
            >
              Дахин илгээх
            </button>
          )}
        </div>
      </div>
    </Container>
  );
};
