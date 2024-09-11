import { PropsWithChildren } from 'react';
import { AdminHeader } from './_components/AdminHeader';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
};

export default Layout;
