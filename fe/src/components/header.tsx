import { Container } from './assets/Container';
import { FaRegEnvelope } from 'react-icons/fa';
import { TbPhoneCall } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { CiHeart } from 'react-icons/ci';
import { BsCart2 } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Input } from '@/components/ui/input';

export const Header = () => {
  return (
    <>
      <Container background="bg-[#7E33E0]">
        <div className="w-full h-11 flex justify-between items-center text-white">
          <div className="w-fit flex justify-center items-center gap-20">
            <div className="flex items-center gap-2">
              <FaRegEnvelope className="w-4 h-4" />
              <h5>info@ecommerce.mn</h5>
            </div>
            <div className="flex items-center gap-2">
              <TbPhoneCall className="w-4 h-4" />
              <h5>77123456</h5>
            </div>
          </div>
          <div className="w-fit flex justify-center items-center gap-14">
            {' '}
            <div className="flex items-center gap-2">
              <h5>Нэвтрэх</h5>
              <CgProfile className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <h5>Хадгалах</h5>
              <CiHeart className="w-4 h-4" />
            </div>
            <BsCart2 className="w-4 h-4" />
          </div>
        </div>
      </Container>
      <SearchSection />
    </>
  );
};

const SearchSection = () => {
  return (
    <Container background="bg-white">
      <div className="w-full h-14 flex justify-between items-center">
        <div className="w-fit flex justify-center items-center gap-10">
          <h2 className="text-3xl">Ecommerce</h2>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2 items-center border-none">
              <h5 className="text-[#FB2E86]">Нүүр </h5>
              <IoMdArrowDropdown className="text-[#FB2E86]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <h5>Ангилал</h5>
        </div>
        <form className="w-30 h-8 flex items-center justify-center relative ">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full px-4 pr-12 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
          >
            <FaSearch className="text-gray-500" />
          </button>
        </form>
      </div>
    </Container>
  );
};
