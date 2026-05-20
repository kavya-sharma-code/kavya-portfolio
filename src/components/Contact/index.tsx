import {
  Box,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Social } from "../../types/social";
import { ContactForm } from "./form";
import { Socials } from "../Socials";

type contactProps = {
  socials: Social[];
};

export const Contact: React.FC<contactProps> = (props: contactProps) => {
  return (
    <>
      <Heading size={"xl"} textAlign={"left"}>
        Let’s build something impactful
      </Heading>
      <Text mt={5}>
        I’m open to backend roles and freelance collaborations. Share your
        requirements — I’ll get back to you quickly.
      </Text>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={{
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
            },
          },
          hidden: { opacity: 0, x: -300 },
        }}
      >
        <Stack
          spacing={{ base: 10, sm: 48 }}
          mt={8}
          direction={{ base: "column", sm: "row" }}
          justifyContent={"space-between"}
        >
          <Box flex={4}>
            <ContactForm />
          </Box>
          <VStack
            alignSelf={"center"}
            alignItems={{ base: "self-start", sm: "self-end" }}
            textAlign={{ base: "start", sm: "end" }}
            flex={3}
            width={"100%"}
          >
            <Box>
              <Heading size={"md"}>Email</Heading>
              <Link
                href="mailto:kavyasharma.workspace@gmail.com"
                color={"cyan.300"}
              >
                kavyasharma.workspace@gmail.com
              </Link>
            </Box>
            <Box>
              <Heading size={"md"} mt={6}>
                Location
              </Heading>
              <Text>Gurugram, India</Text>
              <Heading size={"md"} mt={6}>
                Phone
              </Heading>
              <Link href="tel:+918076331970" color={"cyan.300"}>
                +91 8076331970
              </Link>
            </Box>
            <Box>
              <Heading size={"md"} mt={6}>
                Social
              </Heading>
              <HStack>
                <Socials socials={props.socials} />
              </HStack>
            </Box>
          </VStack>
        </Stack>
      </motion.div>
    </>
  );
};
