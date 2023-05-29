import React, { useEffect, useState } from "react";

// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Icon,
  Text,
  Th,
  Thead,
  Tr, IconButton
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import SearchBar from "components/Navbars/SearchBar/SearchBar";

// Table Components
import TablesProjectRow from "components/Tables/TablesProjectRow";
//import TablesTableRow from "components/Tables/TablesTableRow";

// Data
import { tablesProjectData } from "variables/general";

// Icons
import { AiFillCheckCircle } from "react-icons/ai";

import { useAuthContext } from "hooks/useAuthContext";

function Nft() {

  const [nfts, setNfts] = useState([]);
  const [filteredNfts, setFilteredNfts] = useState([]);

  const { user } = useAuthContext();

  useEffect( () => {
    
    const fetchNfts = async () => {

      try {
        const response = await fetch('http://localhost:8800/api/nft/all', {
          "headers" : { Authorization: `Bearer ${user.token}` } 
        });
        const json = await response.json();

        console.log("data..." ,json);

        setNfts(json.data);
        setFilteredNfts(json.data);

      } catch (error) {
        console.error("Error in fetching data ",error);
      }
    }

    if(user){
      fetchNfts();
    }


  }, [user]);

  const handleFilter = (search) => {

    if(search === "")
      setFilteredNfts(nfts);
    else{
      const data = nfts.filter( nft => nft.Name.toLowerCase().includes(search.toLowerCase()) 
        || nft.Category.toLowerCase().includes(search.toLowerCase()) );
      setFilteredNfts(data);
    }
  }


  return (

    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      

      <Card my='22px' overflowX={{ sm: "scroll", xl: "hidden" }} pb='0px'>

        <SearchBar handleFilter={handleFilter}>
            <IconButton />
        </SearchBar>

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

              {/* <Text fontSize='sm' color='gray.400' fontWeight='normal'>

                <Text fontWeight='bold' as='span' color='gray.400'>
                  +30%
                </Text>{" "}

                this month
              </Text> */}

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
                  Category
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Floor Value
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Rarity
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
                  Collection
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Created Date
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  No. Of Transactions
                </Th>
              </Tr>
            </Thead>

            <Tbody>
              {filteredNfts?.map((nft, index, arr) => {
                return (
                  <TablesProjectRow
                    key={nft._id}
                    category={nft.Category}
                    collectionid={nft.CollectionId}
                    date={nft.CreatedDate}
                    description={nft.Description}
                    value={nft.FloorValue}
                    name={nft.Name}
                    logo={nft.ImageUrl}
                    nftid={nft.NftId}
                    ownerid={nft.OwnerId}
                    ownerName={nft.OwnerName}
                    collectionName=""
                    nooftransactions={nft.NoOfTransactions}
                    rarity={nft.Rarity}
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
