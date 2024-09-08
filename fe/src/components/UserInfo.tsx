'use client';

import { Container } from './assets/Container';
import Link from 'next/link';

export const UserInfo = () => {
  return (
    <Container className="bg-white">
      <div className="flex  rounded-lg p-6 w-full h-[764px] px-[78px] pt-[100px] pb-[74px]">
        {/* Sidebar */}
        <div className="w-1/4 border-r border-gray-200">
          <ul className="space-y-4">
            <li className="font-bold text-gray-800">Хэрэглэгчийн хэсэг</li>
            <Link href="/OrderHistory">
              <li className="text-gray-600">Захиалгын түүх</li>
            </Link>
          </ul>
        </div>

        {/* Form Section */}
        <div className="w-3/4 pl-8">
          <h2 className="text-lg font-bold mb-4 text-black">
            Хэрэглэгчийн хэсэг
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Овог:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Нэр:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Утасны дугаар:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Имэйл хаяг:</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Хаяг</label>
              <textarea className="w-full border border-gray-300 rounded-md p-2 h-24" />
            </div>

            <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Мэдээлэл шинэчлэх
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};
