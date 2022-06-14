import { ChakraProvider, Box, Grid } from '@chakra-ui/react'

import { theme } from './styles/theme'

import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { v4 } from 'uuid'

const posts = [
  {
    id: v4(),
    author: {
      name: "Naruto",
      avatar_url: "https://i.pinimg.com/originals/22/af/95/22af95e42aa2f137014e38b87dc0d714.jpg",
      role: "Ninja developer"
    },
    content: [
      {
        id: v4(),
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        id: v4(),
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        id: v4(),
        type: "link",
        content: "jane.design/doctorcare"
      }
    ],
    publishedAt: new Date()
  },
  {
    id: v4(),
    author: {
      name: "Naruto",
      avatar_url: "https://i.pinimg.com/originals/22/af/95/22af95e42aa2f137014e38b87dc0d714.jpg",
      role: "Ninja developer"
    },
    content: [
      {
        id: v4(),
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        id: v4(),
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        id: v4(),
        type: "link",
        content: "jane.design/doctorcare"
      }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  }
]

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        background="#121214"
        w="100%"
        outline="transparent"
        display="flex"
        flexDir="column"
        __css={{
          ":focus": {
            outline: "transparent !important",
            boxShadow: "0 0 0 2px green.500"
          }
        }}
      >
        <Header />

        <Grid
          maxW="70rem"
          m="2rem auto"
          p="0 1rem"

          gridTemplateColumns={["1fr", "1fr", "256px 1fr"]}
          gap="2rem"
          alignItems="flex-start"
        >
          <Sidebar />
          <Box as="main">
            {posts.map(post => (
              <Post key={post.id} {...post} />
            ))}
          </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
