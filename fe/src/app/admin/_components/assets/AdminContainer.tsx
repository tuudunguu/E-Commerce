import { ReactNode } from 'react';
import { AdminSideBar } from './AdminSideBar';

type PropsChildren = {
  children: ReactNode;
  className: string;
};

export const AdminContainer = ({ children, className }: PropsChildren) => {
  return (
    <div className={className}>
      <div className={`max-w-[1440px] m-auto`}>
        <div className="flex">
          <AdminSideBar />
          <div className="flex-1 ">{children}</div>
        </div>
      </div>
    </div>
  );
};
