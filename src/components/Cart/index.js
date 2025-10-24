import { CartContainer, CartQuantity } from "./styles.js"
import { ShoppingCartIcon } from "@phosphor-icons/react"
import { useCart } from "../../contexts/CartContext"

const Cart = () => {
  const { getTotalQuantity } = useCart();
  const totalQuantity = getTotalQuantity();
  
  return (
    <CartContainer>
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