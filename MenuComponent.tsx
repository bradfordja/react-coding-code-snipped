import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container
} from '@mui/material';

// Define the type for the menu items
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

// Sample data
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella cheese, and basil.',
    price: '$12.99',
    imageUrl: 'https://example.com/margherita-pizza.jpg',
  },
  {
    id: 2,
    name: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with eggs, cheese, pancetta, and pepper.',
    price: '$14.99',
    imageUrl: 'https://example.com/spaghetti-carbonara.jpg',
  },
  // Add more items as needed
];

const MenuComponent: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Restaurant Menu
        </Typography>
        <Grid container spacing={4}>
          {menuItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.imageUrl}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.description}
                  </Typography>
                  <Typography variant="body1" color="textPrimary" mt={2}>
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default MenuComponent;