
import React,{useState} from "react";

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
  IconButton,
} from "@chakra-ui/react";

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



function Collectionpage() {
  
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
     

      {/* Authors Table*/}
      
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb='0px'>
        <App color="white">
          Search
        </App>
             <SearchBar>
              <IconButton>
    
              </IconButton>
            </SearchBar>

        
      </Card>
      
     
    </Flex>
  );
}

export default Collectionpage;