import { Box, Image, Link, Text, Flex, Textarea, Button } from "@chakra-ui/react";

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

    <Box
      as="form"
      mt="1.5rem"
      pt="1.5rem"
      borderTop="1px solid"
      borderColor="gray.600"
      
      __css={{
        "&:focus-within footer": {
          visibility: "visible",
          maxH: "none"
        }
      }}
    >
      <Text
        as="strong"
        lineHeight="1.6rem"
        color="gray.100"
      >
        Leave your feedback
      </Text>

      <Textarea
        placeholder="Write your comment..."
        background="gray.900"
        resize="none"
        borderRadius="8px"
        color="gray.100"
        lineHeight={1.4}
        mt="1.4rem"
        _hover={{
          borderColor: "gray.500"
        }}
      />

      <Box
        as="footer"
        visibility="hidden"
        maxH="0"
      >
        <Button
          type="submit"
          fontWeight="bold"
          color="white"
          mt="1rem"
          p="1rem 1.5rem"
          background="green.500"
          cursor="pointer"
          _hover={{
            background: "green.500",
            color: "white",
          }}
          _active={{}}
        >
          Comment
        </Button>
      </Box>
    </Box>
  </Box>
)