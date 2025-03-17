import { Avatar, Box, Flex, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../Assets/Constant";
import { AiFillHome } from "react-icons/ai";
import { TbLogout2 } from "react-icons/tb";

const SideBar = () => {
  const sideBarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Hamse Saed" src="/profilepic.png" />,
      text: "Profile",
      link: "/AsProgrammer",
    },
  ];

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        {/* Desktop Logo */}
        <RouterLink to="/">
          <Box pl={2} display={{ base: "none", md: "block" }} cursor="pointer">
            <InstagramLogo />
          </Box>
        </RouterLink>

        {/* Mobile Logo */}
        <RouterLink to="/">
          <Box
            p={2}
            display={{ base: "block", md: "none" }}
            borderRadius={8}
            _hover={{ bg: "whiteAlpha.200" }}
            w={10}
            cursor="pointer"
          >
            <InstagramMobileLogo />
          </Box>
        </RouterLink>

        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sideBarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{base:"block",md:"none"}}
            >
              <RouterLink to={item.link || ""} style={{ textDecoration: "none" }}>
                <Flex
                  alignItems="center"
                  gap={4}
                  _hover={{ bg: "whiteAlpha.400" }}
                  borderRadius={6}
                  p={2}
                  w={{ base: 10, md: "full" }}
                  justifyContent={{base:"center",md:"flex-start"}}
                >
                  {item.icon}
                  <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
                </Flex>
              </RouterLink>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
             
              hasArrow
              label={"Logout"}
              placement="right"
              ml={1}
              openDelay={500}
              display={{base:"block",md:"none"}}
            >
              <RouterLink to={"/auth"} style={{ textDecoration: "none" }}>
                <Flex
                  alignItems="center"
                  gap={4}
                  _hover={{ bg: "whiteAlpha.400" }}
                  borderRadius={6}
                  p={2}
                  w={{ base: 10, md: "full" }}
                  justifyContent={{base:"center",md:"flex-start"}}
                >
                 < TbLogout2  size={25}/>
                  <Box display={{ base: "none", md: "block" }}>LogOut</Box>
                </Flex>
              </RouterLink>
            </Tooltip>
      </Flex>
    </Box>
  );
};

export default SideBar;


































// import { Avatar, Box, Flex, Tooltip,  } from '@chakra-ui/react'
// import React from 'react'
// import {  Link as RouterLink} from 'react-router-dom'
// import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../Assets/Constant'
//  import { AiFillHome } from 'react-icons/ai'
// const SideBar = () => {
//     const sideBarItems = [ {
//         icon:<AiFillHome size={25}/>,
//         text:"Home",
//         link: '/'
//     },
//     {
//         icon: <SearchLogo/>,
//         text: "Search"
//     },
//     {
//         icon: <NotificationsLogo/>,
//         text: "Notifications"
//     },
//     {
//         icon: <CreatePostLogo/>,
//         text: "Create"
//     },
//     {
//         icon: <Avatar size={"sm"} name='Hamse Saed' src='/profilepic.png'/>,
//         text: "Profile",
//         link: "/AsProgrammer"
//     },

//     ];
//   return (
//     <Box 
//     height={"100vh"} borderRight={"1px solid"}
//     borderColor={"whiteAlpha.300"} py={8}
//     position={"sticky"} 
//     top={0}
//      left={0}
//     px={{base:2,md:4}}
//     >
//      <Flex direction={"column"} gap={10} w="full" height={"full"}>
//         {/* Desktop Logo */}
//         <RouterLink to="/">
//           <Box pl={2} display={{ base: "none", md: "block" }} cursor="pointer">
//             <InstagramLogo />
//           </Box>
//         </RouterLink>

//         {/* Mobile Logo */}
//         <RouterLink to="/">
//           <Box
//             p={2}
//             display={{ base: "block", md: "none" }}
//             borderRadius={8}
//             _hover={{ bg: "whiteAlpha.200" }}
//             w={10}
//             cursor="pointer"
//           >
//             <InstagramMobileLogo />
//           </Box>
//         </RouterLink>
//         <Flex direction={"column"} gap={5} cursor={"pointer"}>
//          {sideBarItems.map((item,index)=> (
//             <Tooltip 
//             key={index} 
//             hasArrow 
//             label={item.text}
//              placement='right' 
//              ml={1} openDelay={500}
//              display={{base:"block",md:"none"}}
//              >
//             <RouterLink
//             display={"flex"}
//             to={item.link || ""}
           

//             alignItems={"center"}
//             gap={4}
//             _hover={{bg:"whiteAlpha.400"}}
//             borderRadius={6}
//             p={2}
//             w={{base:10,md:"full"}}
            
//             >
//             {item.icon}
//           <Box display={{base:"none",md:"block"}}>
//              {item.text}
//           </Box>
//             </RouterLink>
             
//             </Tooltip>
//          ))}
//         </Flex>
//       </Flex>
//     </Box>
//   )
// }

// export default SideBar








// <Flex direction={"column"} gap={10} w="full" height={"full"}>
// <Link to={"/"} as={RouterLink} pl={2} display={{base:"none",md:"block"}} cursor="pointer">
//  <InstagramLogo/>
// </Link>
// <Link to={"/"} as={RouterLink} p={2} 
// display={{base:"block",md:"none"}} 
// borderRadius={8}
// _hover={{bg:"whiteAlpha.200" }}
// w={10}
// cursor="pointer">
//  <InstagramMobileLogo/>
// </Link>
// </Flex>
// </Box>