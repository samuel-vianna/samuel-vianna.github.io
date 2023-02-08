import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

interface props {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export function ProjectCardComponent({
  title,
  description,
  tags,
  link,
}: props) {
  return (
    <Box
      border="1px solid white"
      py={4}
      px={6}
      w="100%"
      borderRadius="lg"
      margin="0 0 auto"
    >
      <Text fontSize="lg" fontWeight="bold" align="center" position="relative">
        {title}
        <Link href={link}>
          <Box position="absolute" top="0" right="0">
            <BiLinkExternal />
          </Box>
        </Link>
      </Text>

      <Divider mb={2} />

      <Stack spacing={1}>
        <Flex align="center" gap={2}>
          {tags.map((tag) => (
            <Text
              fontSize="sm"
              border="1px solid white"
              borderRadius="lg"
              px={2}
              py={1}
            >
              {tag}
            </Text>
          ))}
        </Flex>
      </Stack>

      <Divider my={2} />

      <Text maxH={100} overflowY="scroll" pr={2}>
        {description}
      </Text>
    </Box>
  );
}
