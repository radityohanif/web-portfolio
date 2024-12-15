import { Avatar } from "@/components/ui/avatar";
import { Data as Props } from "@/stores/useSkill";
import { Card, Badge, Flex } from "@chakra-ui/react";

export default function CardComponent({ name, img, desc, badge }: Props) {
  return (
    <Card.Root>
      <Card.Body gap="2">
        <Avatar bg={img} name={name} />
        <Card.Title mt="2">{name}</Card.Title>
        <Card.Description>{desc}</Card.Description>
        <Flex flexWrap={"wrap"} gap={2}>
          {badge?.map((item: string) => (
            <Badge key={item} variant="surface">
              {item}
            </Badge>
          ))}
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}
