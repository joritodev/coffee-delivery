import { CartContainer, CartQuantity } from "./styles.js"
import { ShoppingCartIcon } from "@phosphor-icons/react"
import { useCart } from "../../contexts/CartContext"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const { getTotalQuantity } = useCart();
  const totalQuantity = getTotalQuantity();
  const navigate = useNavigate()
  
  const handleCartClick = () => {
    navigate('/checkout', { replace: false });
  };
  
  return (
    <CartContainer onClick={handleCartClick} style={{ cursor: 'pointer' }}>
      {totalQuantity > 0 && (
        <CartQuantity>
          {totalQuantity}
        </CartQuantity>
      )}
      <ShoppingCartIcon size={22} color="#c47f02" weight="fill"/>
    </CartContainer>
  )
}

export { Cart }