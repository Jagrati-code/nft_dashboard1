
/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";

export default function AuthFooter(props) {
  return (
    
    <Flex
      flexDirection={{
        base: "column",
      }}
      alignItems={{
        base: "center",
      }}
      justifyContent='space-between'
      pb='20px'
      fontSize='sm'>

      <Text
        color='white'
        textAlign={{
          base: "center",
        }}
        mb={{ base: "20px" }}>
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as='span' mx='2px'>
          {document.documentElement.dir === "rtl"
            ? "Made by IT TECTS"
            : "Made by IT TECTS"}
        </Text>
      </Text>

      <List display='flex'>
        {/* <ListItem>
         
          <Link color='white' fontSize='sm' href='#'>
            {document.documentElement.dir === "rtl" ? "IT TECTS" : "IT TECTS"}
          </Link>
        </ListItem> */}

        {/* <ListItem
          me={{
            base: "20px",
          }}>
          <Link
            color='white'
            fontSize='sm'
          
            href='#blog'>
            {document.documentElement.dir === "rtl" ? "Blog" : "Blog"}
          </Link>
        </ListItem> */}

        {/* <ListItem>
          <Link
            color='white'
            
            href='#license'>
            {document.documentElement.dir === "rtl" ? "License" : "License"}
          </Link>
        </ListItem> */}

      </List>
     
    </Flex>
  );
}
