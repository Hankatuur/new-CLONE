import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import FeedPost from '../../Components/FeedPosts/FeedPost'

import SuggestedUsers from '../../Components/SuggestedUser/SuggestedUsers'

const HomePage = () => {
  return (
    <Container maxWidth={"container.lg"}>
    <Flex gap={20}>
      <Box flex={2} py={10} >
        <FeedPost/>
      </Box>
      <Box flex={3} mr={20} display={{base:"none",lg:"block"}} maxWidth={"300px"} >
       <SuggestedUsers/>
        </Box>
    </Flex>
    </Container>
  )
}

export default HomePage