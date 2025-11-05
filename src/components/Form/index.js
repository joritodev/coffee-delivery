import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DeliveryDetails, FormRow, Input, InputWrapper, OptionalLabel, PaymentContainer, PaymentMethod, PaymentText, Remove, Subtitle, Text, Texts, Title, Name, ProductContainer, ProductInfos, QuantityButtons, QuantityText, Total, Left, BodyInfos, PageContainer,
  LeftColumn, RightColumn, OrderSummaryCard, ConfirmButton, TotalSection, TotalItem, CheckoutListContainer, ErrorMessage, EmptyCartContainer, EmptyCartIcon, EmptyCartTitle, EmptyCartText, EmptyCartButton,
} from "./styles";
import { MapPinLineIcon, CurrencyDollarIcon, MoneyIcon, BankIcon, CreditCardIcon, ShoppingCartIcon } from "@phosphor-icons/react"
import { MinusIcon, PlusIcon, TrashIcon } from "@phosphor-icons/react"
import { useCart } from "../../contexts/CartContext"
import data from "../../data.json"

const Form = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [formData, setFormData] = useState({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
  });
  const [errors, setErrors] = useState({});
  const { cartItems, adjustCartItem, updateCartItem, clearCart } = useCart();

  const checkoutList = Object.keys(cartItems).map(itemName => {
    const productDetails = data.find(p => p.name === itemName);
    const quantity = cartItems[itemName];

    if (!productDetails) return null;

    return {
      ...productDetails,
      quantity: quantity
    }
  }).filter(Boolean)

  const paymentMethods = [
    { id: 'credito', icon: <CreditCardIcon size={16} color="#8047f8" />, label: 'Cartão de crédito' },
    { id: 'debito', icon: <BankIcon size={16} color="#8047f8" />, label: 'Cartão de débito' },
    { id: 'dinheiro', icon: <MoneyIcon size={16} color="#8047f8" />, label: 'Dinheiro' },
  ];


  const subtotal = checkoutList.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 3.50;
  const total = subtotal + deliveryFee;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.cep.trim()) {
      newErrors.cep = 'CEP é obrigatório';
    }
    if (!formData.rua.trim()) {
      newErrors.rua = 'Rua é obrigatória';
    }
    if (!formData.numero.trim()) {
      newErrors.numero = 'Número é obrigatório';
    }
    if (!formData.bairro.trim()) {
      newErrors.bairro = 'Bairro é obrigatório';
    }
    if (!formData.cidade.trim()) {
      newErrors.cidade = 'Cidade é obrigatória';
    }
    if (!formData.uf.trim()) {
      newErrors.uf = 'UF é obrigatória';
    } else if (formData.uf.trim().length !== 2) {
      newErrors.uf = 'UF deve ter 2 caracteres';
    }

    if (!selectedMethod) {
      newErrors.paymentMethod = 'Selecione um método de pagamento';
    }

    if (checkoutList.length === 0) {
      newErrors.cart = 'Adicione pelo menos um item ao carrinho';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (clearCart) {
        clearCart();
      }

      navigate('/sucess');
    }
  };

  if (checkoutList.length === 0) {
    return (
      <EmptyCartContainer>
        <EmptyCartIcon>
          <ShoppingCartIcon size={64} color="#DBAC2C" weight="regular" />
        </EmptyCartIcon>
        <EmptyCartTitle>Seu carrinho está vazio</EmptyCartTitle>
        <EmptyCartText>Adicione alguns cafés deliciosos ao seu carrinho para continuar com o pedido</EmptyCartText>
        <EmptyCartButton onClick={() => navigate('/')}>
          Ver Cafés Disponíveis
        </EmptyCartButton>
      </EmptyCartContainer>
    );
  }

  return (
    <PageContainer onSubmit={handleSubmit}>
      <LeftColumn>
        <Title>Complete seu pedido</Title>
        <DeliveryDetails>
          <Texts>
            <MapPinLineIcon size={22} color="#c47f17" />
            <div>
              <Subtitle>Endereço de Entrega</Subtitle>
              <Text>Informe o endereço onde deseja receber seu pedido</Text>
            </div>
          </Texts>

          <div>
            <Input
              type="text"
              placeholder="CEP"
              value={formData.cep}
              onChange={(e) => handleInputChange('cep', e.target.value)}
              required
              hasError={!!errors.cep}
            />
            {errors.cep && <ErrorMessage>{errors.cep}</ErrorMessage>}
          </div>

          <div>
            <Input
              type="text"
              placeholder="Rua"
              value={formData.rua}
              onChange={(e) => handleInputChange('rua', e.target.value)}
              required
              hasError={!!errors.rua}
            />
            {errors.rua && <ErrorMessage>{errors.rua}</ErrorMessage>}
          </div>

          <FormRow>
            <div style={{ flex: '0 0 120px' }}>
              <Input
                type="text"
                placeholder="Número"
                value={formData.numero}
                onChange={(e) => handleInputChange('numero', e.target.value)}
                required
                hasError={!!errors.numero}
              />
              {errors.numero && <ErrorMessage>{errors.numero}</ErrorMessage>}
            </div>
            <InputWrapper>
              <Input
                type="text"
                placeholder="Complemento"
                value={formData.complemento}
                onChange={(e) => handleInputChange('complemento', e.target.value)}
              />
              <OptionalLabel>Opcional</OptionalLabel>
            </InputWrapper>
          </FormRow>

          <FormRow>
            <div style={{ flex: 2 }}>
              <Input
                type="text"
                placeholder="Bairro"
                value={formData.bairro}
                onChange={(e) => handleInputChange('bairro', e.target.value)}
                required
                hasError={!!errors.bairro}
              />
              {errors.bairro && <ErrorMessage>{errors.bairro}</ErrorMessage>}
            </div>
            <div style={{ flex: 2 }}>
              <Input
                type="text"
                placeholder="Cidade"
                value={formData.cidade}
                onChange={(e) => handleInputChange('cidade', e.target.value)}
                required
                hasError={!!errors.cidade}
              />
              {errors.cidade && <ErrorMessage>{errors.cidade}</ErrorMessage>}
            </div>
            <div style={{ flex: 1, minWidth: '60px' }}>
              <Input
                type="text"
                placeholder="UF"
                value={formData.uf}
                onChange={(e) => handleInputChange('uf', e.target.value.toUpperCase())}
                maxLength={2}
                required
                hasError={!!errors.uf}
              />
              {errors.uf && <ErrorMessage>{errors.uf}</ErrorMessage>}
            </div>
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
                type="button"
                isSelected={selectedMethod === method.id}
                onClick={() => {
                  setSelectedMethod(method.id);
                  if (errors.paymentMethod) {
                    setErrors(prev => {
                      const newErrors = { ...prev };
                      delete newErrors.paymentMethod;
                      return newErrors;
                    });
                  }
                }}
              >
                {method.icon}
                <PaymentText>{method.label}</PaymentText>
              </PaymentMethod>
            ))}
          </div>
          {errors.paymentMethod && <ErrorMessage>{errors.paymentMethod}</ErrorMessage>}
          {errors.cart && <ErrorMessage>{errors.cart}</ErrorMessage>}
        </PaymentContainer>
      </LeftColumn>

      <RightColumn>
        <Title>Cafés selecionados</Title>
        <OrderSummaryCard>
          <CheckoutListContainer>
            {checkoutList.map(item => (
              <ProductContainer key={item.id}>
                <ProductInfos>
                  <img src={item.image} alt="Foto do café" />
                  <BodyInfos>
                    <Left>
                      <Name>{item.name}</Name>
                      <QuantityButtons>
                        <button type="button" onClick={() => adjustCartItem(item.name, -1)}>
                          <MinusIcon size={14} color="#8047F8" />
                        </button>
                        <QuantityText>{item.quantity}</QuantityText>
                        <button type="button" onClick={() => adjustCartItem(item.name, 1)}>
                          <PlusIcon size={14} color="#8047F8" />
                        </button>
                        <Remove type="button" onClick={() => updateCartItem(item.name, 0)}>
                          <TrashIcon size={16} color="#8047F8" />
                          <p>Remover</p>
                        </Remove>
                      </QuantityButtons>
                    </Left>
                    <Total>
                      R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                    </Total>
                  </BodyInfos>
                </ProductInfos>
              </ProductContainer>
            ))}
          </CheckoutListContainer>

          <TotalSection>
            <TotalItem>
              <Text>Total de itens</Text>
              <Text>R$ {subtotal.toFixed(2).replace('.', ',')}</Text>
            </TotalItem>
            <TotalItem>
              <Text>Entrega</Text>
              <Text>R$ {deliveryFee.toFixed(2).replace('.', ',')}</Text>
            </TotalItem>
            <TotalItem>
              <Subtitle style={{ fontWeight: 'bold' }}>Total</Subtitle>
              <Subtitle style={{ fontWeight: 'bold' }}>R$ {total.toFixed(2).replace('.', ',')}</Subtitle>
            </TotalItem>
          </TotalSection>

          <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
        </OrderSummaryCard>
      </RightColumn>
    </PageContainer>
  )
}
export { Form }