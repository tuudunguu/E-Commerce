import Link from 'next/link';
import { IoGrid } from 'react-icons/io5';
import { MdContentPaste } from 'react-icons/md';
import { MdOutlineDiscount } from 'react-icons/md';
import { FaListAlt } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';

export const AdminDashboard = () => {
  return (
    <>
      <nav className="w-[222px] h-screen bg-white shadow-md">
        <ul className="flex flex-col p-4 space-y-4 gap-3">
          <li>
            <Link href="Admin/Dashboard">
              <div className="flex items-center text-black hover:text-blue-500 gap-3">
                <IoGrid />
                <h4 className="font-semibold">Хяналтын самбар</h4>
              </div>
            </Link>
          </li>
          <li>
            <Link href="Admin/Order">
              <div className="flex items-center text-black hover:text-blue-500 gap-3">
                <MdContentPaste />
                <h4 className="font-semibold">Захиалга</h4>
              </div>
            </Link>
          </li>
          <li>
            <Link href="Admin/Income">
              <div className="flex items-center text-black hover:text-blue-500 gap-3">
                <MdOutlineDiscount />
                <h4 className="font-semibold">Орлого</h4>
              </div>
            </Link>
          </li>
          <li>
            <Link href="Admin/DashboardProduct">
              <div className="flex items-center text-black hover:text-blue-500 gap-3">
                <FaListAlt />
                <h4 className="font-semibold">Бүтээгдхүүн</h4>
              </div>
            </Link>
          </li>
          <li>
            <Link href="Admin/UpdateSettings">
              <div className="flex items-center text-black hover:text-blue-500 gap-3">
                <IoSettings />
                <h4 className="font-semibold">Тохиргоо</h4>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
