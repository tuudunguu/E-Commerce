'use client';

import { Container } from './assets/Container';
import Link from 'next/link';

export const Login = () => {
  return (
    <Container className="bg-white">
      <div className="w-will h-fit  px-[353px] pt-24 pb-40">
        <div className="bg-white shadow-md rounded-lg p-4 w-full h-fit text-black">
          {/* Header */}
          <div className="flex justify-end mb-10">
            <Link href="/Register">
              <h5 className="text-black text-2xl font-bold ">Бүртгүүлэх</h5>
            </Link>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-4">Нэвтрэх</h2>

          {/* Registration Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Нэр"
              className="w-full border border-gray-300 rounded-md p-2"
            />

            <input
              type="password"
              placeholder="Нууц үг"
              className="w-full border border-gray-300 rounded-md p-2"
            />

            <button className="bg-black text-white w-full py-2 rounded-md mt-4">
              Нэвтрэх
            </button>

            <div className="flex justify-center">
              <h5 className="text-sm text-[#71717A] font-normal">
                Нууц үг мартсан
              </h5>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};
