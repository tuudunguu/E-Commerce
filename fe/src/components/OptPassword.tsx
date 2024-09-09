'use client';

import { Container } from './assets/Container';
import { useState } from 'react';

export const OptPassword = () => {
  const [password, setPassword] = useState('');
  const [passwordRequirements, setPasswordRequirements] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const validatePassword = (password) => {
    const requirements = {
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    setPasswordRequirements(requirements);
    setPassword(password);
  };

  const allRequirementsPassed =
    passwordRequirements.hasUppercase &&
    passwordRequirements.hasLowercase &&
    passwordRequirements.hasNumber &&
    passwordRequirements.hasSpecialChar;

  return (
    <Container className="bg-[#f6f6f6]">
      <div className="w-will h-fit  px-[353px] pt-24 pb-40">
        <div className="bg-white shadow-md rounded-lg p-4 w-full h-fit text-black">
          {/* Header */}

          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-4">
            Нууц үг сэргээх
          </h2>

          {/* Registration Form */}
          <form className="space-y-4">
            <input
              type="password"
              placeholder="Шинэ нууц үг"
              className="w-full border border-gray-300 rounded-md p-2"
              onChange={(e) => validatePassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Шинэ нууц үг давтах"
              className="w-full border border-gray-300 rounded-md p-2"
            />

            {/* Password Requirements */}
            {!allRequirementsPassed && password.length > 0 && (
              <ul className="text-sm space-y-1">
                <li
                  className={
                    passwordRequirements.hasUppercase
                      ? 'text-gray-500'
                      : 'text-red-500'
                  }
                >
                  Том үсэг орсон байх
                </li>
                <li
                  className={
                    passwordRequirements.hasLowercase
                      ? 'text-gray-500'
                      : 'text-red-500'
                  }
                >
                  Жижиг үсэг орсон байх
                </li>
                <li
                  className={
                    passwordRequirements.hasNumber
                      ? 'text-gray-500'
                      : 'text-red-500'
                  }
                >
                  Тоо орсон байх
                </li>
                <li
                  className={
                    passwordRequirements.hasSpecialChar
                      ? 'text-gray-500'
                      : 'text-red-500'
                  }
                >
                  Тэмдэгт орсон байх
                </li>
              </ul>
            )}

            {/* Submit Button */}
            <button className="bg-black text-white w-full py-2 rounded-md mt-4">
              Үүсгэх
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};
