import { Box, Link, Text, Flex, Textarea, Button } from "@chakra-ui/react";
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

type Props = {
  author: {
    avatar_url: string;
    name: string;
    role: string;
  };
  publishedAt: Date;
  content: {
    type: string;
    content: string;
  }[];
}

export const Post = ({ author, content, publishedAt }: Props) => {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
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
          <Avatar
            url={author.avatar_url}
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
              {author.name}
            </Text>
            <Text
              as="span"
              display="block"
              color="gray.400"
              lineHeight={1.6}
            >
              {author.role}
            </Text>
          </Flex>
        </Flex>
  
        <Box
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
          as="time"
          fontSize="0.875rem"
          color="gray.400"
        >
          {publishedDateRelativeToNow}
        </Box>
      </Flex>
  
      <Box lineHeight={1.6} color="gray.300" mt="1.5rem">
  
        {content.map(item => {
          if (item.type === 'link')
            return (
              <Text as="p" mt="1rem">
                <Link
                  fontWeight="bold"
                  color="green.500"
                  _hover={{
                    color: "green.300"
                  }}
                >
                  {item.content}
                </Link>
              </Text>
            )
  
          return (
            <Text as="p" mt="1rem">
              {item.content}
            </Text>
          )
        })}
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
  
      <Box mt="2rem">
        <Comment />
        <Comment />
        <Comment />
      </Box>
    </Box>
  );
}