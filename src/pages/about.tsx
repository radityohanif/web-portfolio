import PublicLayout from "@/components/layout/public/layout";
import { Flex, Heading, Stack } from "@chakra-ui/react";

export default function About() {
  return (
    <PublicLayout>
      <Flex minH={"100dvh"} justifyContent={"center"} alignItems={"center"}>
        <Stack>
          <Heading fontSize={"5xl"}>About</Heading>
        </Stack>
      </Flex>
    </PublicLayout>
  );
}
