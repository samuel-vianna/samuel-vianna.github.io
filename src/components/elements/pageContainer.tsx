import { Stack } from "@chakra-ui/react";

interface props {
  children: any;
  className?: string;
}

export function PageContainerComponent({ children, className }: props) {
  return (
    <Stack
      className={`page-container ${className}`}
      height="calc(100vh - 64px)"
      w="100%"
      px={16}
      justifyContent="center"
      alignItems="center"
      bg="dark.900"
      color="white"
    >
      {children}
    </Stack>
  );
}
