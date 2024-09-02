import { ReactNode } from "react";

type PropsChildren = {
  children: ReactNode;
};

export const Container = ({ children }: PropsChildren) => {
  return <div className="max-w-[1920px] m-auto">{children}</div>;
};
