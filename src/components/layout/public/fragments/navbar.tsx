import { Flex } from "@chakra-ui/react";
import NavbarItem from "./navbar-item";
import { useLocation } from "react-router";
import styled from "styled-components";

const NavbarWrapper = styled(Flex)`
  background: rgba(26, 26, 26, 0.8);
  padding: 20px 50px;
  border-radius: 50px;
  box-shadow: 0 0 50px 50px rgba(255, 255, 255, 0.1), 0 0 30px 5px rgba(255, 255, 255, 0.3);
  transition: box-shadow 0.3s ease-in-out;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  &:hover {
    box-shadow: 0 0 50px 50px rgba(255, 255, 255, 0.15), 0 0 30px 5px rgba(255, 255, 255, 0.3);
  }
`;

export default function Navbar() {
  const path = useLocation().pathname;

  return (
    <Flex
      width={"100%"}
      justifyContent={"center"}
      position={"fixed"}
      marginTop={{ base: "10px", md: "20px" }}
      zIndex={9999}
    >
      <NavbarWrapper width={"80%"} alignItems={"center"} justifyContent={"center"} position={"relative"}>
        <Flex gap={"25px"} justifyContent={"end"}>
          <NavbarItem active={path == "/"} to="/">
            Home
          </NavbarItem>
          <NavbarItem active={path == "/skills"} to="/skills">
            Skills
          </NavbarItem>
        </Flex>
      </NavbarWrapper>
    </Flex>
  );
}
