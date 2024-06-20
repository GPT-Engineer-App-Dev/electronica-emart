import { Box, SimpleGrid, Image, Text, Button, VStack, Input, Select, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: 699, category: "Electronics", brand: "BrandA", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: 999, category: "Electronics", brand: "BrandB", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: 199, category: "Accessories", brand: "BrandA", image: "/images/headphones.jpg" },
];

const Products = ({ searchTerm }) => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handlePriceRangeChange = (e) => setPriceRange(e.target.value);
  const handleBrandChange = (brands) => setSelectedBrands(brands);

  const filteredProducts = sampleProducts.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "" || product.category === category) &&
      (priceRange === "" || (priceRange === "0-500" && product.price <= 500) || (priceRange === "500-1000" && product.price > 500 && product.price <= 1000) || (priceRange === "1000+" && product.price > 1000)) &&
      (selectedBrands.length === 0 || selectedBrands.includes(product.brand))
    );
  });

  return (
    <Box p={4}>
      <Input
        placeholder="Search products"
        value={searchTerm}
        mb={4}
      />
      <Select placeholder="Select category" value={category} onChange={handleCategoryChange} mb={4}>
        <option value="Electronics">Electronics</option>
        <option value="Accessories">Accessories</option>
      </Select>
      <Select placeholder="Select price range" value={priceRange} onChange={handlePriceRangeChange} mb={4}>
        <option value="0-500">$0 - $500</option>
        <option value="500-1000">$500 - $1000</option>
        <option value="1000+">$1000+</option>
      </Select>
      <CheckboxGroup value={selectedBrands} onChange={handleBrandChange} mb={4}>
        <Stack spacing={2} direction="column">
          <Checkbox value="BrandA">BrandA</Checkbox>
          <Checkbox value="BrandB">BrandB</Checkbox>
        </Stack>
      </CheckboxGroup>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {filteredProducts.map(product => (
          <VStack key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" />
            <Text fontSize="xl" fontWeight="bold">{product.name}</Text>
            <Text>${product.price}</Text>
            <Button as={Link} to={`/products/${product.id}`} colorScheme="teal">View Details</Button>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;