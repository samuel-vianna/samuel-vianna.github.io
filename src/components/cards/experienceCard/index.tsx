import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/react";

interface props {
  title: string;
  company: string;
  description?: string;
  startDate: string;
  endDate: string;
}

import { FaCalendar, FaBuilding } from "react-icons/fa";

export function ExperienceCardComponent({
  title,
  company,
  description,
  startDate,
  endDate,
}: props) {
  return (
    <Box
      border="1px solid white"
      py={4}
      px={6}
      borderRadius="lg"
      w={400}
      margin="0 0 auto"
    >
      <Text fontSize="lg" fontWeight="bold" align="center">
        {title}
      </Text>
      <Divider my={2} />

      <Stack spacing={1}>
        <Flex align="center" gap={2}>
          <FaBuilding />
          <Text>{company}</Text>
        </Flex>

        <Flex align="center" gap={2}>
          <FaCalendar />
          <Text>
            {startDate} - {endDate}
          </Text>
        </Flex>
      </Stack>

      {description && (
        <>
          <Divider my={2} />

          <Text maxH={100} overflowY="scroll" pr={2}>
            {description}
          </Text>
        </>
      )}
    </Box>
  );
}
