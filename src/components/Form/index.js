import { useState } from "react";
import { DeliveryDetails, FormContainer, FormRow, Input, InputWrapper, OptionalLabel, PaymentContainer, PaymentMethod, PaymentText, Subtitle, Text, Texts, Title, } from "./styles";
import { MapPinLineIcon, CurrencyDollarIcon, MoneyIcon, BankIcon, CreditCardIcon } from "@phosphor-icons/react"
// import { useCart } from "../../contexts/CartContext"

const Form = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const paymentMethods = [
    { id: 'credito', icon: <CreditCardIcon size={16} color="#8047f8" />, label: 'Cartão de crédito' },
    { id: 'debito', icon: <BankIcon size={16} color="#8047f8" />, label: 'Cartão de débito' },
    { id: 'dinheiro', icon: <MoneyIcon size={16} color="#8047f8" />, label: 'Dinheiro' },
  ];

  // const { updateCartItem, getItemQuantity } = useCart();
  // const [localQuantity, setLocalQuantity] = useState(0);

  // // Sincroniza a quantidade local com a quantidade no carrinho
  // useEffect(() => {
  //   const cartQuantity = getItemQuantity(name);
  //   setLocalQuantity(cartQuantity);
  // }, [name, getItemQuantity]);

  // const handlePlusQuantity = () => {
  //   setLocalQuantity(localQuantity + 1);
  // }

  // const handleMinusQuantity = () => {
  //   if (localQuantity > 0) {
  //     setLocalQuantity(localQuantity - 1);
  //   }
  // }

  return (
    <FormContainer>
      <Title>Complete seu pedido</Title>
      <DeliveryDetails>
        <Texts>
          <MapPinLineIcon size={22} color="#c47f17" />
          <div>
            <Subtitle>Endereço de Entrega</Subtitle>
            <Text>Informe o endereço onde deseja receber seu pedido</Text>
          </div>
        </Texts>

        <Input type="text" placeholder="CEP" />

        <Input type="text" placeholder="Rua" />

        <FormRow>
          <Input type="text" placeholder="Número" style={{ flex: '0 0 120px' }} />
          <InputWrapper>
            <Input type="text" placeholder="Complemento" />
            <OptionalLabel>Opcional</OptionalLabel>
          </InputWrapper>
        </FormRow>

        <FormRow>
          <Input type="text" placeholder="Bairro" style={{ flex: 2 }} />
          <Input type="text" placeholder="Cidade" style={{ flex: 2 }} />
          <Input type="text" placeholder="UF" style={{ flex: 1, minWidth: '60px' }} />
        </FormRow>
      </DeliveryDetails>

      <PaymentContainer>
        <Texts>
          <CurrencyDollarIcon size={22} color="#8047f8" />
          <div>
            <Subtitle>Pagamento</Subtitle>
            <Text>O pagamento é feito na entrega. Escolha a forma que deseja pagar</Text>
          </div>
        </Texts>
        <div className="methods">
          {paymentMethods.map((method) => (
            <PaymentMethod
              key={method.id}
              isSelected={selectedMethod === method.id}
              onClick={() => setSelectedMethod(method.id)}
            >
              {method.icon}
              <PaymentText>{method.label}</PaymentText>
            </PaymentMethod>
          ))}
        </div>
      </PaymentContainer>
    </FormContainer>
  )
}
export { Form }