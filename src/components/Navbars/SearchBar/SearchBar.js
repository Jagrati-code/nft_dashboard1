

import React, {useState} from "react";
import { tablesTableData } from "variables/general";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

export function SearchBar(props) {

  // Pass the computed styles into the `__css` prop
  const { variant, children, handleFilter , ...rest } = props;

  // Chakra Color Mode
  const searchIconColor = "white";
  const inputBg = "gray.800";
  //const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    handleFilter(e.target.value);
  }

  

  return (

    <InputGroup bg={inputBg} borderRadius='15px' w='200px' marginLeft='1000px'>

      <InputLeftElement

        children={

          <IconButton
            bg='inherit'
            borderRadius='inherit'
            _hover='none'
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
            icon={
              <SearchIcon color={searchIconColor} w='15px' h='15px' />
            }>

          </IconButton>
            
        }
        
      />
      
      <Input
      type="search"
        fontSize='xs'
        py='11px'
        placeholder='Search...'
        borderRadius='inherit'
        onChange={handleChange}
        //value={searchInput}
        color={"white"}
      />
      
    </InputGroup>
    
  );
};
export default SearchBar;
