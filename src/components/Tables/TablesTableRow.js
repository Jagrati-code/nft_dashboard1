import { Avatar, Badge, Button, Flex, Td, Text, Tr, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import image from "../../assets/images/Collection/AtemCard.png"

function TablesTableRow(props) {

  const { logo, name, category, collectionid, ownerid, ownerName, communitysize, date, description, lastItem } = props;

  // console.log(logo);
  // const imageurl = `../../assets${logo}`;
  // console.log(imageurl)

  // const image = require("../../assets/images/Collection/AtemCard.png");

  //const textColor = useColorModeValue("gray.700", "white");
  //const bgStatus = useColorModeValue("gray.400", "#1a202c");

  const colorStatus = useColorModeValue("white", "gray.400");

  return (

    <Tr>

      <Td minWidth={{ sm: "250px" }} ps='0px' border={lastItem ? "none" : null} borderBottomColor='#56577A'>
        <Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Avatar
            src= {image}
            w='50px'
            borderRadius='12px'
            me='18px'
            border='none'
          />

          {/* <img src={image} alt="Image" /> */}
          
          <Flex direction='column'>
            <Text
              fontSize='sm'
              color='#fff'
              fontWeight='normal'
              minWidth='100%'>
              {name}
            </Text>
            <Text fontSize='sm' color='gray.400' fontWeight='normal'>
              {category}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td
        border={lastItem ? "none" : null}
        borderBottomColor='#56577A'
        minW='150px'>
        <Flex direction='column'>
          <Text fontSize='sm' color='#fff' fontWeight='normal'>
            {ownerName}
          </Text>
        </Flex>
      </Td>

      <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
        <Text fontSize='sm' color='#fff' fontWeight='normal'>
          {communitysize}
        </Text>
      </Td>

      {/* <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
        <Text fontSize='sm' color='#fff' fontWeight='normal'>
          {description}
        </Text>
      </Td> */}

      <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
        <Text fontSize='sm' color='#fff' fontWeight='normal'>
          {new Date(date).toISOString().split("T")[0]}
        </Text>
      </Td>

      <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
        <Button p='0px' bg='transparent' variant='no-hover'>
          <Text
            fontSize='sm'
            color='gray.400'
            fontWeight='bold'
            cursor='pointer'>
            View
          </Text>
        </Button>
      </Td>

    </Tr>
  );
}

export default TablesTableRow;
