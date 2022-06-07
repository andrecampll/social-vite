import { Box, Image, Link, Text } from "@chakra-ui/react";

type Props = {
  author: string;
  content: string;
}

export const Post = ({ author, content }: Props) => (
  <Box as="article">
    <Box as="header">
      <Box>
        <Image src="https://i.pinimg.com/originals/22/af/95/22af95e42aa2f137014e38b87dc0d714.jpg" />
      
        <Box>
          <Text color="#FFF" as="strong">{author}</Text>
          <Text color="#FFF" as="span">{content}</Text>
        </Box>
      </Box>

      <Box title="11h may às 22:00" dateTime="2022-05-11 08:13:30" as="time">
        Posted 1 hour ago
      </Box>
    </Box>

    <Box>
        <Text as="p">
          Fala galeraa 👋
        </Text>

        <Text as="p">
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </Text>

        <Text as="p">
          👉 <Link>jane.design/doctorcare</Link>
        </Text>

        <Text as="p">
          <Link>#novoprojeto</Link>
        </Text>
    </Box>
  </Box>
)