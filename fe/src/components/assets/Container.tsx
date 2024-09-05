import { ReactNode } from 'react';

type PropsChildren = {
  children: ReactNode;
  className: string;
};

export const Container = ({ children, className }: PropsChildren) => {
  return (
    <div className={className}>
      <div className={`max-w-[1040px] m-auto`}>{children}</div>
    </div>
  );
};
