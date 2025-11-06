import { useEffect } from 'react';
import { MapPinIcon, TimerIcon, CurrencyDollarIcon } from '@phosphor-icons/react';
import { useLocation } from 'react-router-dom';

import { useCart } from '../../contexts/CartContext';
import { useCheckout } from '../../contexts/CheckoutContext';

import {
  SuccessContainer,
  MainContent,
  TextContent,
  Title,
  Subtitle,
  OrderInfoBorder,
  OrderInfoCard,
  InfoItem,
  IconWrapper,
  InfoText,
  ImageContent,
  Illustration
} from './styles';

import DeliveryIllustration from '../../assets/Illustration.svg';
import { Header } from '../../components/Header';

const Sucess = () => {

  const location = useLocation();
  const address = location.state?.orderAddress;

  const { clearCart } = useCart();
  const { clearCheckoutData } = useCheckout();

  useEffect(() => {
    clearCart();
    clearCheckoutData();
  }, [clearCart, clearCheckoutData]);

  const paymentMethodText = {
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
    money: 'Dinheiro',
  };
  if (!address || !address.rua) {
    return (
      <>
        <Header />
        <SuccessContainer>
          <Title>Oops!</Title>
          <Subtitle>Nenhum pedido foi confirmado.</Subtitle>
        </SuccessContainer>
      </>
    );
  }

  return (
    <>
      <Header />
      <SuccessContainer>

        <MainContent>
          <TextContent>
            <Title>Uhu! Pedido confirmado</Title>
            <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>

            <OrderInfoBorder>
              <OrderInfoCard>
                <InfoItem>
                  <IconWrapper className="purple">
                    <MapPinIcon size={16} weight="fill" color='#FAFAFA' />
                  </IconWrapper>
                  <InfoText>
                    Entrega em <strong>{address.rua}, {address.numero}<br /></strong>
                    <span>{address.bairro} - {address.cidade}, {address.uf}</span>
                  </InfoText>
                </InfoItem>

                <InfoItem>
                  <IconWrapper className="yellow">
                    <TimerIcon size={16} weight="fill" color='#FAFAFA' />
                  </IconWrapper>
                  <InfoText>
                    Previsão de entrega
                    <br />
                    <strong>20 min - 30 min</strong>
                  </InfoText>
                </InfoItem>

                <InfoItem>
                  <IconWrapper className="yellow-dark">
                    <CurrencyDollarIcon size={16} color='#FAFAFA' />
                  </IconWrapper>
                  <InfoText>
                    Pagamento na entrega
                    <br />
                    <strong>{paymentMethodText[address.paymentMethod] || 'Não definido'}</strong>
                  </InfoText>
                </InfoItem>
              </OrderInfoCard>
            </OrderInfoBorder>
          </TextContent>

          <ImageContent>
            <Illustration
              src={DeliveryIllustration}
              alt="Ilustração de um entregador em uma moto roxa"
            />
          </ImageContent>
        </MainContent>
      </SuccessContainer>
    </>
  );
};

export default Sucess