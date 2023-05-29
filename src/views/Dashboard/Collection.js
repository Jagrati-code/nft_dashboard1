import React,{useEffect, useState} from "react";

// Chakra imports
import { Flex, Table, Tbody, Icon, Text, Th, Thead, Tr, IconButton } from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import SearchBar from "components/Navbars/SearchBar/SearchBar";
import App from "components/Navbars/Dropdown";

// Table Components
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";

// Data
import { tablesProjectData, tablesTableData } from "variables/general";

// Icons
import { AiFillCheckCircle } from "react-icons/ai";

import { useAuthContext } from "hooks/useAuthContext";


function Tables() {
  
  const [collections, setCollections] = useState([]);
  const [filteredCollections, setFilteredCollections] = useState([]);

  const { user } = useAuthContext();

  useEffect( () => {
    
    const fetchCollections = async () => {

      try {
        const response = await fetch('http://localhost:8800/api/collection/all', {
          "headers" : { Authorization: `Bearer ${user.token}` } 
        });
        const json = await response.json();

        console.log("data..." ,json);

        setCollections(json.data);
        setFilteredCollections(json.data);

      } catch (error) {
        console.error("Error in fetching data ",error);
      }
    }

    if(user){
      fetchCollections();
    }


  }, [user]);


  const handleFilter = (search) => {

    if(search === "")
      setFilteredCollections(collections);
    else{
      const data = collections.filter( collection => collection.Name.toLowerCase().includes(search.toLowerCase()) 
        || collection.Category.toLowerCase().includes(search.toLowerCase()) );
      setFilteredCollections(data);
    }
  }


  
  return (

    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
     

      {/* Collection Table*/}
      
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb='0px'>

        {/* <App color="white">
          Search
        </App> */}

        <SearchBar handleFilter={handleFilter}>
          <IconButton />
        </SearchBar>

        <CardHeader p='6px 0px 22px 0px'>
          <Text fontSize='lg' color='#fff' fontWeight='bold'>
           TOP COLLECTIONS TABLE
          </Text>
        </CardHeader>

        <CardBody>
          <Table variant='simple' color='#fff'>

            <Thead>
              <Tr my='.8rem' ps='0px' color='gray.400'>
                <Th
                  ps='0px'
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Collection
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
                  Community Size
                </Th>
               
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Created Date
                </Th>
                <Th borderBottomColor='#56577A'></Th>
              </Tr>
            </Thead>
            
            <Tbody>

              

              {filteredCollections?.map( (collection, index, arr) => {
                return (
                  <TablesTableRow
                    key={collection._id}
                    name={collection.Name}
                    ImageUrl={collection.ImageUrl}
                    category={collection.Category}
                    collectionid={collection.CollectionId}
                    ownerid={collection.OwnerId}
                    ownerName={collection.OwnerName}
                    communitysize={collection.CommunitySize}  
                    date={collection.CreatedDate}
                    description={collection.description}
                    lastItem={index === arr.length - 1 ? true : false}
                  />
                )
              })}
              
            </Tbody>
          </Table>
        </CardBody>
      </Card>

    </Flex>
  );
}

export default Tables;
