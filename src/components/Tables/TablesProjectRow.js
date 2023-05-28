import React from "react";
import {
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

function DashboardTableRow(props) {
  const { logo, name, value, nftid, ownerid, ownerName, collectionid, collectionName, nooftransactions, rarity } = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (

    <Tr>

      <Td
        minWidth={{ sm: "250px" }}
        ps='0px'
        borderBottomColor='#56577A'
        border={collectionid ? "none" : null}>
        <Flex alignItems='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Icon as={logo} h={"20px"} w={"20px"} me='18px' />
          <Text fontSize='sm' color='#fff' minWidth='100%'>
            {name}
          </Text>
        </Flex>
      </Td>

      <Td borderBottomColor='#56577A' border={collectionid ? "none" : null}>
        <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {value}
        </Text>
      </Td>

      <Td borderBottomColor='#56577A' border={collectionid ? "none" : null}>
        <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {rarity}
        </Text>
      </Td>

      <Td borderBottomColor='#56577A' border={collectionid ? "none" : null}>
        <Flex direction='column'>
          <Text
            fontSize='sm'
            color='#fff'
            fontWeight='bold'
            pb='.2rem'>{ownerid}</Text>
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
          {collectionid}
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
