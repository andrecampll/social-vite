import { Box, Image, Link, Text, Flex } from "@chakra-ui/react";

type Props = {
  author: string;
}

export const Post = ({ author }: Props) => (
  <Box
    as="article"
    background="gray.800"
    borderRadius="8px"
    p="2.5rem"
    __css={{
      "& + &": {
        mt: "2rem"
      }
    }}
  >
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex
        alignItems="center"
        gap="1rem"
      >
        <Image
          src="https://i.pinimg.com/originals/22/af/95/22af95e42aa2f137014e38b87dc0d714.jpg"
          w="calc(3rem + 12px)"
          h="calc(3rem + 12px)"
          borderRadius="8"
          border="4px solid"
          borderColor="gray.800"
          outline="2px solid"
          outlineColor="green.500"
        />
        <Flex
          flexDir="column"
        >
          <Text
            as="strong"
            display="block"
            color="gray.100"
            lineHeight={1.6}
          >
            {author}
          </Text>
          <Text
            as="span"
            display="block"
            color="gray.400"
            lineHeight={1.6}
          >
            Web developer
          </Text>
        </Flex>
      </Flex>

      <Box
        title="11h may às 22:00"
        dateTime="2022-05-11 08:13:30"
        as="time"
        fontSize="0.875rem"
        color="gray.400"
      >
        Posted 1 hour ago
      </Box>
    </Flex>

    <Box lineHeight={1.6} color="gray.300" mt="1.5rem">
      <Text as="p" mt="1rem">
        Fala galeraa 👋
      </Text>

      <Text as="p" mt="1rem">
        Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      </Text>

      <Text as="p" mt="1rem">
        👉 
        <Link
          fontWeight="bold"
          color="green.500"
          _hover={{
            color: "green.300"
          }}
        >
          jane.design/doctorcare
        </Link>
      </Text>

      <Text as="p" mt="1rem">
        <Link
          fontWeight="bold"
          color="green.500"
          _hover={{
            color: "green.300"
          }}
        >
          #novoprojeto
        </Link>
      </Text>
    </Box>
  </Box>
)