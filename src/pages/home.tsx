import PublicLayout from "@/components/layout/public/layout";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import avatar from "@/assets/avatar.svg";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <PublicLayout>
      <Flex minH={"100dvh"} justifyContent={"center"} alignItems={"center"}>
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
                  Full Stack Web Developer
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
                <Button>More Detail About Me</Button>
                <Button>Hello</Button>
              </Flex>
            </Stack>
            <Box bottom={20} borderStart={"white 2px solid"} paddingStart={"20px"} position={"absolute"}>
              <Text fontSize={"lg"} w={{ base: "80%", md: "50%" }}>
                I'm full-stack web developer and i work remotely from Indonesia
              </Text>
            </Box>
          </Stack>
          <Stack w={"40%"} display={{ base: "none", md: "flex" }}>
            <img src={avatar} />
          </Stack>
        </Flex>
      </Flex>
    </PublicLayout>
  );
}
