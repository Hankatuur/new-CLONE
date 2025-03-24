import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../Assets/Constant';

const PostFooter = ({username}) => {
    const [liked, setLiked] = useState(false);//  this is count liked comments dynamically
    const [Likes,setLikes] = useState(1000);   //  this is count number of likes dynamically
    const handleLiked = () => {
        if(liked){
            setLiked(false);
            setLikes(Likes-1)
        }
        else{
            setLiked(true);
            setLikes(Likes+1)
        }
    }
  return (
    <Box my={10}>
    <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
     <Box onClick={handleLiked} cursor={"pointer"} fontSize={18} >
        {!liked ? (<NotificationsLogo/>) :(<UnlikeLogo/>)}
     </Box>

     <Box cursor={"pointer"} fontSize={18} >
       <CommentLogo/>
     </Box>
    </Flex>
    <Text fontWeight={600} fontSize={"sm"}>
        {Likes} likes
    </Text>

    <Text fontSize={"sm"} fontWeight={700} > 
      {username}{""}  {/* {username} {""} this gonna be username place */}
        <Text as= "span" fontWeight={400}>
          Felling Good
        </Text>
        </Text>
        <Text fontSize={"sm"} color={"gray"}>
       View All 1,000 Comments 
        </Text>
     <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
      <InputGroup>
      <Input variant={"flushed"} placeholder={"Add A Comment..."} fontSize={14}/>
      <InputRightElement>
      <Button fontSize={14} color={"blue.500"} 
      fontWeight={600} 
      cursor={"pointer"} 
      _hover={{color:"white" }}
      bg={"transparent"}
       >
        Post
        </Button>
      </InputRightElement>
      </InputGroup>
     </Flex>
    </Box>
  )
}

export default PostFooter