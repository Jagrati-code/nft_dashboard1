import React from "react";

// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Icon,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

// Table Components
import TablesProjectRow from "components/Tables/TablesProjectRow";
//import TablesTableRow from "components/Tables/TablesTableRow";

// Data
import { tablesProjectData } from "variables/general";

// Icons
import { AiFillCheckCircle } from "react-icons/ai";

function Nft() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      {/* Authors Table */}
      {/*  */}
      {/* Projects Table */}
      <Card my='22px' overflowX={{ sm: "scroll", xl: "hidden" }} pb='0px'>
        <CardHeader p='6px 0px 22px 0px'>
          <Flex direction='column'>
            <Text fontSize='lg' color='#fff' fontWeight='bold' mb='.5rem'>
              NFTs TABLE
            </Text>
            <Flex align='center'>
              <Icon
                as={AiFillCheckCircle}
                color='green.500'
                w='15px'
                h='15px'
                me='5px'
              />
              <Text fontSize='sm' color='gray.400' fontWeight='normal'>
                <Text fontWeight='bold' as='span' color='gray.400'>
                  +30%
                </Text>{" "}
                this month
              </Text>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant='simple' color='#fff'>
            <Thead>
              <Tr my='.8rem' ps='0px'>
                <Th
                  ps='0px'
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  NFTs
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  NFT ID
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Price
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Owner
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Collection ID
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesProjectData.map((row, index, arr) => {
                return (
                  <TablesProjectRow
                    name={row.name}
                    logo={row.logo}
                    value={row.value}
                    nftid={row.nftid}
                    owner={row.owner}
                    collectionid={row.collectionid}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Nft;
