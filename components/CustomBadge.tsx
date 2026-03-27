import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function CustomBadge() {
  const { cart } = useCartStore();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <Link href="/cart">
      <IconButton>
        <ShoppingCartIcon fontSize="small" />
        <CartBadge
          badgeContent={totalQuantity}
          color="primary"
          overlap="circular"
        />
      </IconButton>
    </Link>
  );
}
