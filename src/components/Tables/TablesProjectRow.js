import React from "react";
import {
  Avatar,
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";

import DynamicImports from "components/DynamicImports.mjs";
import { useState } from "react";

function DashboardTableRow(props) {
  const { category, collectionid, date, description, logo, name, value, nftid, ownerid, ownerName, collectionName, nooftransactions, rarity } = props;
  const textColor = useColorModeValue("gray.700", "white");

  const [module, setModule] = useState("");

  DynamicImports(logo)
  .then( mod => {
    console.log(mod);
    setModule(mod);
  })

  return (

    <Tr>

      <Td
        minWidth={{ sm: "250px" }}
        ps='0px'
        borderBottomColor='#56577A'
        border={collectionid ? "none" : null}>
        <Flex alignItems='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          {/* <Icon as={logo} h={"20px"} w={"20px"} me='18px' /> */}
          <Avatar
            src={module}
            w='50px'
            borderRadius='12px'
            me='18px'
            border='none'
          /> 
          <Text fontSize='sm' color='#fff' minWidth='100%'>
            {name}
          </Text>
        </Flex>
        {/* <Text fontSize='sm' color='#fff' minWidth='100%'>
            {nftid}
        </Text> */}
      </Td>

      <Td borderBottomColor='#56577A' border={collectionid ? "none" : null}>
        <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {category}
        </Text>
      </Td>

      <Td borderBottomColor='#56577A' border={collectionid ? "none" : null}>
        <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {value}
        </Text>
      </Td>

      <Td borderBottomColor='#56577A' border={collectionid ? "none" : null}>
        <Flex direction='column'>
          <Text
            fontSize='sm'
            color='#fff'
            fontWeight='bold'
            pb='.2rem'>{rarity}</Text>
          {/* <Progress
            colorScheme='brand'
            maxW='125px'
            h='3px'
            bg='#2D2E5F'
            value={owner}
            borderRadius='15px'
          /> */}
        </Flex>
      </Td>
      <Td borderBottomColor='#56577A' border={collectionid ? "none" : null}>
        <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {ownerName}
        </Text>
        {/* <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {ownerid}
        </Text> */}
      </Td>
      <Td borderBottomColor='#56577A' border={collectionid ? "none" : null}>
        {/* <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {collectionName}
        </Text> */}
        <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {collectionid}
        </Text>
      </Td>
      <Td borderBottomColor='#56577A' border={collectionid ? "none" : null}>
        <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {new Date(date).toISOString().split("T")[0]}
        </Text>
      </Td>
      <Td borderBottomColor='#56577A' border={collectionid ? "none" : null}>
        <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {nooftransactions}
        </Text>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
