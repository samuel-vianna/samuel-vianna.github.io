import { Flex, Heading, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import styles from "@/styles/Skills.module.scss";
import { NavbarComponent } from "@/components/elements/navbar";
import { PageContainerComponent } from "@/components/elements/pageContainer";
import { SkillCardComponent } from "@/components/cards/skillCard";
import {
  skillsTitles,
  technologies,
  hardSkills,
  softSkills,
  languages,
} from "@/assets/skillsTexts";
import { MyContext } from "@/context";
import { FaCode, FaDatabase, FaCloud, FaChartBar } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { TbSitemap } from "react-icons/tb";

// list of technologies
const technologiesItems = [
  ...technologies.programming.map((item) => ({ name: item, icon: FaCode })),
  ...technologies.databases.map((item) => ({ name: item, icon: FaDatabase })),
  ...technologies.cloud.map((item) => ({ name: item, icon: FaCloud })),
  ...technologies.statistics.map((item) => ({ name: item, icon: FaChartBar })),
];

export default function Experience() {
  const { language } = useContext(MyContext);

  // list of hard Skills
  const hardSkillsItems = hardSkills[language].map((item) => ({
    name: item,
    icon: TbSitemap,
  }));

  // list of hardSkills
  const softSkillsItems = softSkills[language].map((item) => ({
    name: item,
    icon: TbSitemap,
  }));

  // list of languages
  const languagesItems = languages[language].map((item) => ({
    name: item,
    icon: BiWorld,
  }));

  return (
    <>
      <NavbarComponent />
      <PageContainerComponent>
        <Heading mb={4}>{skillsTitles[language].pageTitle}</Heading>
        <Flex
          alignItems="center"
          justifyContent="center"
          gap={8}
          id={styles.skillsContainer}
        >
          <SkillCardComponent
            title={skillsTitles[language].list[0]}
            items={technologiesItems}
          />
          <Stack gap={2}>
            <SkillCardComponent
              title={skillsTitles[language].list[1]}
              items={hardSkillsItems}
            />
            <SkillCardComponent
              title={skillsTitles[language].list[2]}
              items={softSkillsItems}
            />
          </Stack>
          <SkillCardComponent
            title={skillsTitles[language].list[3]}
            items={languagesItems}
          />
        </Flex>
      </PageContainerComponent>
    </>
  );
}
