import { Text, Box, Container, useMediaQuery, Link } from "@chakra-ui/react";
import React from "react";
import { ScrollProgress } from "../components/ScrollProgress/ScrollProgress";
import { ParticlesBackground } from "../components/ParticlesBackground/ParticlesBackground";

import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { LandingPage } from "../components/LandingPage";
import { Skills } from "../components/Skills";

import { Contact } from "../components/Contact";
import { About } from "../components/about";
import { Projects } from "../components/Projects";
import { projects } from "../../data/projects";

import bio from "../../data/bio.json";

import links from "../../data/links.json";
import { skills, mainSkills } from "../../data/skills";

const Index: React.FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 480px)", { ssr: false });

  return (
    <>
      {/* Global premium UI layer */}
      <ScrollProgress />
      <ParticlesBackground />
      <NavBar links={links}></NavBar>

      <Container as="main" maxW="100%" p={0} centerContent zIndex={1}>
        <LandingPage {...bio} isMobile={isMobile} />
        <Container maxW="6xl" centerContent>
          <Box id="about" mt={12}>
            <About content={bio.about} />
          </Box>
          <Box id="projects" mt={12}>
            <Projects projects={projects} />
          </Box>
          <Box id="skills" width={"100%"} mt={12}>
            <Skills skills={skills} mainSkills={mainSkills} />
          </Box>
          <Box id="contact" width={"100%"} mt={12}>
            <Contact socials={bio.socials} />
          </Box>
          <Footer>
            <Text fontSize={"sm"}>
              Made with ❤️+☕ by{" "}
              <Link href={"https://github.com/kavya-sharma-code"} isExternal>
                Kavya
              </Link>
            </Text>
          </Footer>
        </Container>
      </Container>
    </>
  );
};

export default Index;
