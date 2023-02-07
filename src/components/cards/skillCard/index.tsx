import {
  Box,
  Divider,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";

interface props {
  title: string;
  items: { name: string; icon: any }[];
}

export function SkillCardComponent({ title, items }: props) {
  return (
    <Box border="1px solid white" py={4} px={6} borderRadius="md" minW={200}>
      <Text fontSize="lg" fontWeight="bold" align="center">
        {title}
      </Text>
      <Divider mb={4} />
      <List spacing={1}>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListIcon as={item.icon} />
            {item.name}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
