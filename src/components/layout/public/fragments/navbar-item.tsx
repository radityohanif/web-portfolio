import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router";

interface Props {
  children: ReactNode;
  to: string;
  active?: boolean;
}

export default function NavbarItem({ children, to, active }: Props) {
  return (
    <Link to={to}>
      <Button
        borderBottom={active ? "solid 2px rgba(255,255,255,0.8)" : ""}
        borderRadius={"none"}
        variant={"ghost"}
        textTransform={"uppercase"}
        letterSpacing={"2px"}
        color={active ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.5)"}
      >
        {children}
      </Button>
    </Link>
  );
}
