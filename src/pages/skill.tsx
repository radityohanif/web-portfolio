import PublicLayout from "@/components/layout/public/layout";
import Card from "@/components/ui/card";
import { Data, useSkill } from "@/stores/useSkill";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Skill() {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    setData(useSkill.get());
  }, []);

  return (
    <PublicLayout>
      <Flex minH={"100dvh"} justifyContent={"center"} alignItems={"start"}>
        <Flex w={{ base: "90%", md: "80%" }} marginTop={"20dvh"}>
          <SimpleGrid columns={[1, 2, 4]} gap="30px" w={"100%"}>
            {data.map((item: Data) => (
              <Card key={item.name} name={item.name} badge={item.badge} desc={item.desc} img={item.img} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </PublicLayout>
  );
}
