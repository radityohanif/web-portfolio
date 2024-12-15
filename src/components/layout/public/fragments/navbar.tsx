import { Flex } from "@chakra-ui/react";
import NavbarItem from "./navbar-item";
import { useLocation } from "react-router";

export default function Navbar() {
  const path = useLocation().pathname;

  return (
    <Flex width={"100%"} justifyContent={"center"} position={"fixed"} marginTop={"20px"}>
      <Flex
        width={"80%"}
        border={"rgba(255,255,255,0.5) 2px solid"}
        paddingX={"50px"}
        paddingY={"20px"}
        borderRadius={"4xl"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"relative"}
      >
        <Flex gap={"25px"} justifyContent={"end"}>
          <NavbarItem active={path == "/"} to="/">
            Home
          </NavbarItem>
          <NavbarItem active={path == "/about"} to="/about">
            About
          </NavbarItem>
        </Flex>
      </Flex>
    </Flex>
  );
}
