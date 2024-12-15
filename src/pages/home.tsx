import PublicLayout from "@/components/layout/public/layout";
import { Box, Flex, Heading, Stack, Text, Highlight } from "@chakra-ui/react";
import avatar from "@/assets/avatar.svg";
import Button from "@/components/ui/button";

export default function Home() {
  const background =
    "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <PublicLayout>
      <Flex h={"100dvh"} w={"100dvw"} bg={`url(${background})`} position={"absolute"} zIndex={100} />

      <Flex
        h={"100dvh"}
        w={"100dvw"}
        position={"absolute"}
        zIndex={150}
        bgGradient="to-r"
        gradientFrom="blackAlpha.900"
        gradientVia={"blackAlpha.700"}
        gradientTo={"blackAlpha.900"}
        opacity={1}
      />

      <Flex
        zIndex={200}
        bg={"none"}
        minH={"100dvh"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        <Flex w={{ base: "90%", md: "80%" }} justifyContent={"center"} alignItems={"center"}>
          <Stack gap={"100px"} w={{ base: "100%", md: "60%" }}>
            <Stack gap={"60px"}>
              <Stack gap={{ base: "20px", md: "30px" }}>
                <Heading
                  textTransform={"uppercase"}
                  fontWeight={"light"}
                  letterSpacing={"2px"}
                  textAlign={{ base: "center", md: "start" }}
                  fontSize={{ base: "xl", md: "4xl" }}
                >
                  <Highlight query={["Web", "Developer"]} styles={{ bg: "whiteAlpha.400" }}>
                    Full Stack Web Developer
                  </Highlight>
                </Heading>
                <Heading
                  textAlign={{ base: "center", md: "start" }}
                  fontSize={{ base: "5xl", md: "7xl" }}
                  fontWeight={"semibold"}
                >
                  Hanif Radityo
                </Heading>
              </Stack>
              <Flex gap={5} justifyContent={{ base: "center", md: "start" }}>
                <Button to="https://www.linkedin.com/in/hanif-radityo/">More About Me</Button>
              </Flex>
            </Stack>
            <Box bottom={20} borderStart={"white 2px solid"} paddingStart={"20px"} position={"absolute"}>
              <Text fontFamily={"monospace"} fontSize={"sm"} letterSpacing={0} w={{ base: "80%", md: "50%" }}>
                <Highlight query={["full-stack", "Indonesia"]} styles={{ bg: "whiteAlpha.400" }}>
                  I'm full-stack web developer and i work remotely from Indonesia
                </Highlight>
              </Text>
            </Box>
          </Stack>
          <Stack w={"40%"} display={{ base: "none", md: "flex" }}>
            <img src={avatar} hidden />
          </Stack>
        </Flex>
      </Flex>
    </PublicLayout>
  );
}
