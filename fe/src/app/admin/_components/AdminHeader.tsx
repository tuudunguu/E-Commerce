import Link from 'next/link';
import Image from 'next/image';
import { FaRegBell } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';

export const AdminHeader = () => {
  return (
    <>
      <div className="w-screen h-[48px] px-6 py-4 bg-black">
        <div className=" h-full w-full flex justify-between items-center">
          <div className="w-fit h-full flex items-center gap-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Logo.png"
                alt="Logo of pinecone"
                width={32}
                height={32}
                quality={100}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-fit h-full flex items-center gap-4">
            <FaRegBell />
            <CgProfile />
            <h5>username</h5>
          </div>
        </div>
      </div>
    </>
  );
};
