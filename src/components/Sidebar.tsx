import { Box, Image, Link, Text, Flex, Button } from "@chakra-ui/react";

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
    >
      <Text
        fontWeight="bold"
        as="strong"
        color="white"
      >
        John Doe
      </Text>

      <Text
        as="span"
        color="white"
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
        _hover={{}}
        _active={{}}
      >
        Editar seu perfil
      </Button>
    </Box>
  </Box>
)