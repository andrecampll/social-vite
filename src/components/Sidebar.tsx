import { PencilLine } from 'phosphor-react';

import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";
import { Avatar } from './Avatar';

export const Sidebar = () => (
  <Box
    as="aside"
    background="gray.800"
    borderRadius="8"
    overflow="hidden"
  >
    <Image
      src="https://images.unsplash.com/photo-1654462809274-60a8391fd945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      width="100%"
      height="72px"
      objectFit="cover"
    />
  
    <Flex
      flexDir="column"
      alignItems="center"
      mt="calc(0px - 1.5rem - 6px)"
    >
      <Avatar
        url="https://i.pinimg.com/originals/22/af/95/22af95e42aa2f137014e38b87dc0d714.jpg"
      />

      <Text
        fontWeight="bold"
        as="strong"
        color="gray.100"
        lineHeight="1.6"
        mt="1rem"
      >
        Naruto Uzumaki
      </Text>

      <Text
        as="span"
        color="gray.400"
        lineHeight="1.6"
        fontSize="0.875rem"
      >
        Web Developer
      </Text>
    </Flex>

    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="gray.600"
      mt="1.5rem"
      padding="1.5rem 2rem 2rem"
    >
      <Button
        as="a"
        w="100%"
        variant="outline"
        borderColor="green.500"
        fontWeight="bold"
        color="green.500"
        cursor="pointer"
        leftIcon={<PencilLine size="20" />}
        _hover={{
          background: "green.500",
          color: "white",
        }}
        _active={{}}
      >
        Edit your profile
      </Button>
    </Box>
  </Box>
)