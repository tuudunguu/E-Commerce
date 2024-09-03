import { ReactNode } from "react";

type PropsChildren = {
  children: ReactNode;
  background: string
};

export const Container = ({ children , background}: PropsChildren) => {
  return <div className={background}><div className="max-w-[1240px] m-auto">{children}</div></div>;
};
