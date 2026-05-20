import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { projects as fallbackProjects, Project } from "../../../data/projects";
import { Card } from "../Card";

type ProjectsProps = {
  projects?: Project[];
};

export const Projects: React.FC<ProjectsProps> = ({
  projects,
}: ProjectsProps) => {
  const items = projects ?? fallbackProjects;

  return (
    <>
      <Heading size={"xl"} textAlign={"left"}>
        Experience / Miscellaneous Projects
      </Heading>

      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.4 }}
      >
        <Box mt={6}>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={6}
            alignItems="stretch"
          >
            {items.map((p: Project, index: number) => (
              <Box
                key={`${p.title}-${index}`}
                flex={1}
                transform={p.featured ? "scale(1)" : "scale(0.98)"}
                transition="transform 200ms ease, filter 200ms ease"
              >
                <Card
                  experience={{
                    title: p.featured ? `${p.customer}` : p.title,
                    customer: p.customer,

                    description: p.description,
                    image: p.image,
                    period: "",
                    colors: p.colors ?? ["#0EA5E9", "#22C55E"],
                    technologies: p.technologies,
                    link: p.link,
                  }}
                  minHeight={p.featured ? 650 : 560}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </motion.div>
    </>
  );
};
