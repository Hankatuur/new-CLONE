import { Avatar, Text, Flex, Link,  } from '@chakra-ui/react'

import React from 'react'

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name='Hamse' size={"lg"} src='/profilepic.png' />
        <Text fontSize={12} fontWeight={"bold"}>
          Hamse_
        </Text>
      </Flex>
      <Link to={'/auth'} fontSize={14} fontWeight={"medium"}
       color={"blue.400"}
       style={{textDecoration:"none"}}
       cursor={"pointer"}>
       Log Out
      </Link>
    </Flex>
  )
}

export default SuggestedHeader