import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../../SideBar/SideBar'
import { useLocation } from 'react-router-dom'

// instead of adding SideBar page To every component ,we can add it only once to the pageLayout component
// and wrap the children with it,This way we can have a sidebar on every page except AuthPage

const PageLayout = ({children}) => {
    const{pathname} = useLocation()
  return (
    <Flex>
    {/* Sidebar On Left   */}
     {pathname!== '/auth' ? (
        <Box w={{base:"70px",md:"240px"}}>
        <SideBar/>
     </Box>
     ) : null}

    {/* The Page Content On Right   */}
    <Box flex={1} w={{base:"calc(100%-70px)",md:"calc(100%-240px)"}}>
        {children}
    </Box>
    </Flex>
  )
}

export default PageLayout