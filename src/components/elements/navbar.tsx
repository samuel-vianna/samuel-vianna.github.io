import { useContext } from "react";
import NextLink from "next/link";
import styles from "@/styles/Components/Elements.module.scss";
import { Box, Flex, Link, Stack, Switch, Text } from "@chakra-ui/react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { navBarText } from "../../assets/text";
import { MyContext } from "@/context";

interface navItemsProps {
  label: string;
  href?: string;
}

interface iconItemsProps {
  icon: JSX.Element;
  href: string;
}

type languageOptionsProps = "pt" | "en";

const ICON_ITEMS: iconItemsProps[] = [
  {
    icon: <FaInstagram fontSize="2rem" />,
    href: "https://www.instagram.com/samuel.vianna/",
  },
  {
    icon: <FaGithub fontSize="2rem" />,
    href: "https://github.com/samuel-vianna",
  },
  {
    icon: <FaLinkedin fontSize="2rem" />,
    href: "https://www.linkedin.com/in/samuel-vianna-quintanilha-a5b0b31b2/",
  },
];

export function NavbarComponent() {
  const { language, setLanguage } = useContext(MyContext);

  const NAV_ITEMS: navItemsProps[] = [
    { label: navBarText[language].home, href: "/" },
    { label: navBarText[language].skills, href: "/skills" },
    { label: navBarText[language].experience, href: "/experience" },
    { label: navBarText[language].projects, href: "/projects" },
  ];

  // format string to title case
  const formatToTitleCase = (string: string) =>
    string.substring(0, 1).toLocaleUpperCase() +
    string.substring(1).toLowerCase();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      spacing={4}
      bg={"dark.900"}
      color="white"
      w="100%"
      py={4}
      px={16}
    >
      <Flex gap={8} alignItems="center">
        <Flex pr={4} gap={2} alignItems="center">
          <Text>pt</Text>
          <Switch
            colorScheme="secondary"
            defaultChecked={language === "en"}
            onChange={(e) => setLanguage(e.target.checked ? "en" : "pt")}
          />
          <Text>en</Text>
        </Flex>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} className={styles.navbarComponent}>
            <Link
              as={NextLink}
              href={navItem.href ?? "#"}
              fontWeight={500}
              _hover={{
                textDecoration: "none",
                color: "secondary.500",
              }}
            >
              {formatToTitleCase(navItem.label)}
            </Link>
          </Box>
        ))}
      </Flex>
      <Flex gap={8} alignItems="center">
        {ICON_ITEMS.map((navItem, index) => (
          <Box key={index}>
            <Link
            as={NextLink}
              target="_blank"
              rel="noreferrer noopener"
              href={navItem.href}
              _hover={{
                textDecoration: "none",
                color: "secondary.500",
              }}
            >
              {navItem.icon}
            </Link>
          </Box>
        ))}
      </Flex>
    </Stack>
  );
}
