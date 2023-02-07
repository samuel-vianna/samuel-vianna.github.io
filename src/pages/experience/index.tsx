import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useLayoutEffect, useContext, useState } from "react";
import { NavbarComponent } from "@/components/elements/navbar";
import { PageContainerComponent } from "@/components/elements/pageContainer";
import { experience } from "@/assets/experienceTexts";
import { MyContext } from "@/context";
import styles from "@/styles/Experience.module.scss";
import { ExperienceCardComponent } from "@/components/cards/experienceCard";

export default function Experience() {
  const { language } = useContext(MyContext);
  const [scrollContainer, setScrollContainer] = useState<any>(null);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      let temp = scrollContainer
        ? scrollContainer
        : document.querySelector(".experience-container");

      if (!scrollContainer) {
        setScrollContainer(temp);
      }

      if (temp) {
        temp.addEventListener("wheel", (evt: any) => {
          evt.preventDefault();
          temp ? (temp.scrollLeft += evt.deltaY > 0 ? 40 : -40) : null;
        });
      }
    }
  }, [scrollContainer]);

  return (
    <>
      <NavbarComponent />
      <PageContainerComponent className={styles.experience}>
        <Heading mb={4}>{experience[language].pageTitle}</Heading>

        <Flex
          alignItems="center"
          mb={24}
          w="100%"
          overflowX="scroll"
          transform="rotateX(180deg)"
          className="experience-container"
          id={styles.experienceContainer}
        >
          <Flex transform="rotateX(180deg)" gap={8} id={styles.yearContainer}>
            {experience[language].history.map((item, index) => (
              <Stack key={index}>
                <Text as="b" fontSize="lg" py={4}>
                  {item.year}
                </Text>
                <Flex gap={8} id={styles.experienceCardsContainer}>
                  {item.items.map((card, index2) => (
                    <ExperienceCardComponent key={index2} {...card} />
                  ))}
                </Flex>
              </Stack>
            ))}
          </Flex>
        </Flex>
      </PageContainerComponent>
    </>
  );
}
