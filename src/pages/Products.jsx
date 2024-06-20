import { Box, SimpleGrid, Image, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
];

const Products = () => (
  <Box p={4}>
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
      {sampleProducts.map(product => (
        <VStack key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" />
          <Text fontSize="xl" fontWeight="bold">{product.name}</Text>
          <Text>{product.price}</Text>
          <Button as={Link} to={`/products/${product.id}`} colorScheme="teal">View Details</Button>
        </VStack>
      ))}
    </SimpleGrid>
  </Box>
);

export default Products;