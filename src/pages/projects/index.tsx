import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { NavbarComponent } from "@/components/elements/navbar";
import { PageContainerComponent } from "@/components/elements/pageContainer";
import { projectsTags, projects } from "@/assets/projectTexts";
import { MyContext } from "@/context";
import styles from "@/styles/Projects.module.scss";
import { ProjectCardComponent } from "@/components/cards/projectCard";
import { TagButtonComponent } from "@/components/buttons/tagButton";

export default function Experience() {
  const { language } = useContext(MyContext);
  const [tags, setTags] = useState<string[]>([]);

  const filteredProjetcs = tags.length
    ? projects.filter((item) => item.tags.some((r) => tags.includes(r)))
    : projects;

  // handling tags
  const handleTags = (tag: string) => {
    setTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((item) => item !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  return (
    <>
      <NavbarComponent />
      <PageContainerComponent className={styles.projects}>
        {/* <Heading mb={2}>{experience[language].pageTitle}</Heading> */}
        <Heading mb={2}>Projetos</Heading>
        <Flex pb={8} gap={2} justify="flex-start" align="center" w="100%">
          <Text as="b">Tags:</Text>
          {projectsTags.map((item, index) => (
            <TagButtonComponent
              key={index}
              name={item}
              activeTags={tags}
              onClick={handleTags}
            />
          ))}
        </Flex>

        <SimpleGrid
          overflowY="scroll"
          h="50vh"
          pr={4}
          w="100%"
          gap={8}
          columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
        >
          {filteredProjetcs.map((item, index) => (
            <ProjectCardComponent key={index} {...item} />
          ))}
        </SimpleGrid>
      </PageContainerComponent>
    </>
  );
}
