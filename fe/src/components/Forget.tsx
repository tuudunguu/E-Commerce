'use client';

import { Container } from './assets/Container';

export const Forget = () => {
  return (
    <Container className="bg-white">
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
              type="Email"
              placeholder="Имэйл хаяг оруулах"
              className="w-full border border-gray-300 rounded-md p-2"
            />

            <button className="bg-black text-white w-full py-2 rounded-md mt-4">
              Илгээх
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};
