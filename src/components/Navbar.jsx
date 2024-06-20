import { Box, Flex, Link, Spacer, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Box bg="teal.500" p={4}>
      <Flex maxW="1200px" mx="auto" align="center">
        <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">Electronics Store</Link>
        <Spacer />
        <Input
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          width="300px"
          mr={4}
          color="white"
          bg="teal.600"
          _placeholder={{ color: "white" }}
        />
        <Button as={RouterLink} to="/products" colorScheme="teal" variant="outline" color="white">Products</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;