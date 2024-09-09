'use client';

import { Container } from './assets/Container';
import { SetStateAction, useState } from 'react';
import Link from 'next/link';

const OrderHistoryData = [
  {
    title: 'All Smiles Nalgene',
    image: 'hat.png',
    price: '120’000₮',
    howMany: 4,
  },
  {
    title: 'Wildflower Hoodie',
    image: 'hat.png',
    price: '120’000₮',
    howMany: 4,
  },
  {
    title: 'All Smiles Nalgene',
    image: 'hat.png',
    price: '120’000₮',
    howMany: 4,
  },
  {
    title: 'Wildflower Hoodie',
    image: 'hat.png',
    price: '120’000₮',
    howMany: 4,
  },
];

type OrderHistoryProps = {
  index: number;
};

export const OrderHistory = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  console.log('expanded:', expanded);

  const toggleExpanded = ({ index }: OrderHistoryProps) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <Container className="bg-[#f6f6f6]">
      <div className="w-full h-fit px-[78px] pt-[100px] pb-[74px]">
        <div className="flex  rounded-lg  w-full h-fit bg-white px-5 py-5">
          {/* Sidebar */}
          <div className="w-1/4 border-r border-gray-200 pr-4 ">
            <ul className="space-y-4">
              <Link href="/UserInfo">
                <li className="text-gray-600">Хэрэглэгчийн хэсэг</li>
              </Link>
              <li className=" font-bold text-gray-800">Захиалгын түүх</li>
            </ul>
          </div>
          {/* Main Section */}
          <div className="w-3/4 pl-8 ">
            <h2 className="text-lg font-bold mb-4 text-black">
              Захиалгын түүх
            </h2>
            {OrderHistoryData.map((order, index) => (
              <div
                key={index}
                className="mb-4 bg-gray-50 rounded-lg p-4 shadow-md cursor-pointer text-black"
              >
                <div
                  onClick={() => toggleExpanded(index)}
                  className="flex justify-between items-center"
                >
                  <span className="font-bold text-gray-800">
                    {new Date().toISOString().split('T')[0]} 15:34
                  </span>
                  <span
                    className={`${
                      expanded === index ? 'bg-blue-500' : 'bg-gray-300'
                    } text-white rounded-full px-4 py-1 text-sm`}
                  >
                    {expanded === index ? 'Хүргэлтэнд гарсан' : 'Дууссан'}
                  </span>
                </div>

                {expanded === index && (
                  <div className="mt-4">
                    {Array(order.howMany)
                      .fill(order)
                      .map((item, i) => (
                        <div key={i} className="flex items-center mb-2">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-12 h-12 rounded mr-4"
                          />
                          <div className="flex-1">
                            <p className="font-semibold">{item.title}</p>
                            <p>{`${item.howMany} x ${item.price}`}</p>
                          </div>
                          <div className="font-semibold">{item.price}</div>
                        </div>
                      ))}

                    <div className="text-right font-bold mt-2">
                      Үнийн дүн: 480’000₮
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
