import { ChakraProvider, Box, Grid } from '@chakra-ui/react'

import { theme } from './styles/theme'

import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'


export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        background="#121214"
        w="100%"
        h="100vh"
      >
        <Header />

        <Grid
          maxW="70rem"
          m="2rem auto"
          p="0 1rem"

          gridTemplateColumns="256px 1fr"
          gap="2rem"
          alignItems="flex-start"
        >
          <Sidebar />
          <Box as="main">
            <Post
              author="John Doe"
            />

            <Post
              author="John Doe"
            />
          </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
