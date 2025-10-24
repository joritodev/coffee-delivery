import {
  CardContainer,
  Type,
  TypeText,
  CoffeeImg,
  CoffeeText,
  CoffeeDescription,
  CoffeeName,
  Buttons,
  Currency,
  Value,
  QuantityButton,
  QuantityText,
  CartAdd
} from "./styles"
import { MinusIcon, PlusIcon, ShoppingCartSimpleIcon } from "@phosphor-icons/react"
import { useCart } from "../../contexts/CartContext"
import { useState, useEffect } from "react"

const Card = ({ image, name, type, description }) => {
  const { updateCartItem, getItemQuantity } = useCart();
  const [localQuantity, setLocalQuantity] = useState(0);

  // Sincroniza a quantidade local com a quantidade no carrinho
  useEffect(() => {
    const cartQuantity = getItemQuantity(name);
    setLocalQuantity(cartQuantity);
  }, [name, getItemQuantity]);

  const handlePlusQuantity = () => {
    setLocalQuantity(localQuantity + 1);
  }
  
  const handleMinusQuantity = () => {
    if(localQuantity > 0){
      setLocalQuantity(localQuantity - 1);
    }
  }

  const handleAddToCart = () => {
    // Define a quantidade final no carrinho como a quantidade local
    updateCartItem(name, localQuantity);
  }
  return (
    <CardContainer>
      <CoffeeImg src={image} />
      <Type>
        <TypeText>{type}</TypeText>
      </Type>
      <CoffeeText>
        <CoffeeName>{name}</CoffeeName>
        <CoffeeDescription>{description}</CoffeeDescription>
      </CoffeeText>
      <Buttons>
        <Currency>R$<Value>9,90</Value></Currency>
        <div>
          <QuantityButton>
            <button onClick={handleMinusQuantity}>
              <MinusIcon size={14} color="#8047f8" weight="bold" />
            </button>
            <QuantityText>{localQuantity}</QuantityText>
            <button onClick={handlePlusQuantity}>
              <PlusIcon size={14} color="#8047f8" weight="bold" />
            </button>
          </QuantityButton>
          <CartAdd onClick={handleAddToCart}>
            <ShoppingCartSimpleIcon size={22} color="#F3F2F2" weight="fill" />
          </CartAdd>
        </div>
      </Buttons>
    </CardContainer>
  )
}

export { Card }