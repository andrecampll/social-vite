import { Box, Text } from "@chakra-ui/react";

type Props = {
  author: string;
  content: string;
}

export const Post = ({ author, content }: Props) => (
  <Box>
    <Text color="#FFF">{author}</Text>
    <Text color="#FFF">{content}</Text>
  </Box>
)