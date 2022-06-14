import { Box, Link, Text, Flex, Textarea, Button } from "@chakra-ui/react";
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useCallback, useMemo, useState } from "react";

import { v4 } from 'uuid';

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

type _Comment = {
  id: string;
  user: {
    avatar_url: string;
    name: string;
  };
  content: string;
}

type Props = {
  author: {
    avatar_url: string;
    name: string;
    role: string;
  };
  publishedAt: Date;
  content: {
    id: string;
    type: string;
    content: string;
  }[];
}

export const Post = ({ author, content, publishedAt }: Props) => {
  const [text, setText] = useState('');
  const [comments, setComments] = useState<_Comment[]>([]);

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })
  
  const handleAddComment = useCallback(
    (content: string) => setComments(state =>
      [
        ...state,
        {
          id: v4(),
          content,
          user: {
            name: "Naruto",
            avatar_url: "https://i.pinimg.com/originals/22/af/95/22af95e42aa2f137014e38b87dc0d714.jpg",
          }
        }
      ]
    ),
    [setComments]
  );

  const handleDeleteComment = useCallback(
    (id: string) =>
      setComments(
        state => state.filter(comment => comment.id !== id)
      ),
      [setComments]
  );

  const isNewCommentInput = useMemo(() => !text.length, [text]);

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
              <Text key={item.id} as="p" mt="1rem">
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
            <Text key={item.id} as="p" mt="1rem">
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
        onSubmit={(e: any) => {
          e.preventDefault();
          handleAddComment(text);
          return setText('')
        }}
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
          value={text}
          onChange={e => setText(e.target.value)}
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
            disabled={isNewCommentInput}
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
        {comments.map(comment => (
          <Comment
            key={comment.id}
            onDeleteComment={() => handleDeleteComment(comment.id)}
            {...comment}
          />
        ))}
      </Box>
    </Box>
  );
}