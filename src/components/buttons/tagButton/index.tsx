import { Button } from "@chakra-ui/react";

export function TagButtonComponent({
  name,
  activeTags,
  onClick,
}: {
  name: string;
  activeTags: string[];
  onClick: (tag: string) => void;
}) {
  return (
    <Button
      p={2}
      size="sm"
      border="1px solid white"
      variant={activeTags.includes(name) ? "solid" : "outline"}
      color={activeTags.includes(name) ? "dark.900" : "solid"}
      onClick={(e) => onClick(name)}
    >
      {name}
    </Button>
  );
}
