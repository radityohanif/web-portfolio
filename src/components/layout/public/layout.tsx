import { ReactNode } from "react";
import Navbar from "./fragments/navbar";

interface Props {
  children: ReactNode;
}

export default function PublicLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
