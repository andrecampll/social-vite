import { Flex, Image } from "@chakra-ui/react";

import Logo from '../assets/ignite-logo.svg';

export const Header = () => (
  <Flex
    background="gray.800"
    justifyContent="center"
    padding="1.25rem 0"
  >
    <Image src={Logo} h="2rem" />
  </Flex>
);