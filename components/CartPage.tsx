import { Box, Typography, IconButton, Card, CardContent, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useCartStore } from '@/store/useCartStore';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Your Cart</Typography>
      
      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        cart.map((item) => (
          <Card key={item.id} sx={{ display: 'flex', mb: 2, alignItems: 'center', p: 2 }}>
            <img src={item.thumbnail} alt={item.title} style={{ width: 80, height: 80, objectFit: 'contain' }} />
            
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography color="text.secondary">${item.price}</Typography>
            </CardContent>

            {/* Quantity Controls */}
            <Box sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>
              <IconButton onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
              <IconButton onClick={() => updateQuantity(item.id, 1)}>
                <AddIcon />
              </IconButton>
            </Box>

            <IconButton color="error" onClick={() => removeFromCart(item.id)}>
              <DeleteOutlineIcon />
            </IconButton>
          </Card>
        ))
      )}

      {cart.length > 0 && (
        <Box sx={{ mt: 4, textAlign: 'right' }}>
          <Typography variant="h5">Total: ${totalPrice.toFixed(2)}</Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Checkout
          </Button>
        </Box>
      )}
    </Box>
  );
}