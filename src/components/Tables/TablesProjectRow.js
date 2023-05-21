/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

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
  const { logo, name, value, nftid, owner, collectionid } = props;
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
          {nftid}
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
            pb='.2rem'>{`${owner}%`}</Text>
          <Progress
            colorScheme='brand'
            maxW='125px'
            h='3px'
            bg='#2D2E5F'
            value={owner}
            borderRadius='15px'
          />
        </Flex>
      </Td>
      <Td borderBottomColor='#56577A' border={collectionid ? "none" : null}>
        <Text fontSize='sm' color='#fff' fontWeight='bold' pb='.5rem'>
          {collectionid}
        </Text>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
