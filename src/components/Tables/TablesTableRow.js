

import {
  Avatar,
  Link,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

//import { pageRoutes } from "routes";

function TablesTableRow(props) {
  const {
    logo,
    name,
    category,
    collectionid,
    ownerid,
    status,
    date,
    lastItem,
  } = props;
  const titleColor = "white";
  const textColor = "gray.400";
  //const textColor = useColorModeValue("gray.700", "white");
  //const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td
        minWidth={{ sm: "250px" }}
        ps='0px'
        border={lastItem ? "none" : null}
        borderBottomColor='#56577A'>
        <Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Avatar
            src={logo}
            w='50px'
            borderRadius='12px'
            me='18px'
            border='none'
          />
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
            {ownerid}
          </Text>
          
        </Flex>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
        <Text fontSize='sm' color='#fff' fontWeight='normal'>
          {collectionid}
        </Text>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
        <Text fontSize='sm' color='#fff' fontWeight='normal'>
          {date}
        </Text>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
      <Flex flexDirection='column' justifyContent='center' alignItems='center' maxW='100%' mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                
                <Link color={titleColor} href={`${process.env.PUBLIC_URL}/#/admin/nft`} ms='5px' fontWeight='bold'> 
                  View
                </Link>
              </Text>
            </Flex>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
