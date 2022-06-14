import { Flex, Box, Button, Image, Text } from "@chakra-ui/react";
import { ThumbsUp, Trash } from "phosphor-react";

type Props = {
  user: {
    avatar_url: string;
    name: string;
  };
  content: string;
  onDeleteComment: () => void;
}

export const Comment = ({ user, content, onDeleteComment }: Props) => (
  <Flex
    mt="1.5rem"
    gap="1rem"
  >
    <Image
      src={user.avatar_url}
      w="3rem"
      h="3rem"
      borderRadius="8"
    />

    <Box
      flex="1"
    >
      <Box
        background="gray.700"
        p="1rem"
        borderRadius="8"
      >
        <Flex
          as="header"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Flex
            flexDir="column"
          >
            <Text
              as="strong"
              fontSize="0.875rem"
              lineHeight={1.6}
              color="gray.100"
            >
              {user.name}
            </Text>
            <Box
              as="time"
              title="11h may às 22:00"
              dateTime="2022-05-11 08:13:30"
              fontSize="0.875rem"
              lineHeight={1.6}
              color="gray.400"
            >
              Posted 1 hour ago
            </Box>
          </Flex>

          <Button
            title="Delete comment"
            variant="ghost"
            borderRadius="20%"
            size="sm"
            color="gray.400"
            fontSize="16"
            onClick={onDeleteComment}
            _hover={{
              background: "gray.800"
            }}
            _active={{
              background: "gray.600"
            }}
          >
            <Trash />
          </Button>
        </Flex>

        <Text
          color="gray.300"
          mt="1rem"
        >
          {content}
        </Text>
      </Box>

      <Box as="footer" mt="1rem">
        <Button
          title="Delete comment"
          variant="ghost"
          size="md"
          color="gray.400"
          fontSize="16"
          display="flex"
          alignItems="center"
          __css={{
            "svg": {
              marginRight: '0.5rem',
              display: "inline-block"
            }
          }}
          _hover={{
            color: "green.300"
          }}
          _active={{}}
        >
          <ThumbsUp />
            Like -
          <Text
            as="span"
          >
            33
          </Text>
        </Button>
      </Box>
    </Box>
  </Flex>
)