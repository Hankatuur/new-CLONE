import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPosts from './FeedPosts'

const FeedPost = () => {
  const [isLoading,setIsLoading] = useState(true);

useEffect(()=>{
  setTimeout(()=>{
    setIsLoading(false)
  },2000)
},[])
  return (
    <Container maxWidth={"container.sm"} py={10} px={2}>
      {isLoading && [0,1,2,3].map((_,idx)=> (
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
         <Flex gap={2}>
          <SkeletonCircle size='10'/>{/* This is avatar state loading */}
          <VStack gap={2} alignItems={"flex-start"}>
           <Skeleton height="10px" w={"200px"} /> {/* This is body state loading */}
           <Skeleton height="10px" w={"200px"} />
          </VStack>
          </Flex>
          <Skeleton w={"full"}>
           <Box h={"500px"}>Content wrapped</Box>
          </Skeleton>
        
        </VStack>
      ))}
      {!isLoading && (
        <>
         <FeedPosts img='/img1.png'username='Hamse' avatar='/img1.png'/>
         <FeedPosts img='/img2.png'username='Zako' avatar='/img2.png'/>
         <FeedPosts img='/img3.png'username='Khalid' avatar='/img3.png'/>
         <FeedPosts img='/img4.png'username='Y8T9' avatar='/img4.png'/>
        </>
      )}
     
    </Container>
  )
}

export default FeedPost



{/* <FeedPosts img='/img1.png'username='Hamse' avatar='/img1.png'/>
<FeedPosts img='/img2.png'username='Zako' avatar='/img2.png'/>
<FeedPosts img='/img3.png'username='Khalid' avatar='/img3.png'/>
<FeedPosts img='/img4.png'username='Y8T9' avatar='/img4.png'/> */}