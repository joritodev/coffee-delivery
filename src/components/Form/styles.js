import styled, { css } from "styled-components";

export const PageContainer = styled.form`
  display: flex;
  gap: 32px;
  margin: 40px 160px;
  width: auto;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-width: 640px;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-width: 448px;
`;

export const FormContainer = styled.div`
`;

export const Title = styled.h2`
  font-family: "Baloo 2";
  font-size: 18px;
  font-weight: bold;
  line-height: 130%;
  color: #403937;
  margin-bottom: 15px;
`;

export const Texts = styled.div`
  column-gap: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Subtitle = styled.h3`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  color: #403937;
`;

export const Text = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  color: #574F4D;
`;

export const DeliveryDetails = styled.div`
  background-color: #F3F2F2;
  padding: 40px;
  border-radius: 6px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: #ededed;
  border: 1px solid ${props => props.hasError ? '#ff0000' : '#e6e5e5'};
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  box-sizing: border-box;

  &::placeholder {
    color: #8D8686;
  }

  &:focus {
    outline: 1px solid ${props => props.hasError ? '#ff0000' : '#C47F17'};
  }

  &:valid {
    color: #574F4D;
    font-family: "Roboto";
    font-size: 14px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
`;

export const OptionalLabel = styled.span`
  font-family: "Roboto";
  font-style: italic;
  position: absolute;
  right: 12px;
  color: #8D8686;
  font-size: 12px;
  line-height: 130%;
  font-weight: 400;
  pointer-events: none;
`;

export const OrderSummaryCard = styled.div`
  background-color: #F3F2F2;
  padding: 40px;
  border-radius: 6px 44px 6px 44px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CheckoutListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding-bottom: 24px;
  border-bottom: 1px solid #E6E5E5;
  margin-bottom: 24px;

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
  }

  img {
    width: 64px;
    height: 64px;
    margin-right: 20px;
  }
`;

export const ProductInfos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex: 1;
`;

export const BodyInfos = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const Left = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.h3`
  font-family: "Roboto";
  font-size: 16px;
  color: #403937;
  line-height: 130%;
`;

export const QuantityButtons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 32px;
  gap: 8px;

  button {
    width: auto;
    min-width: 32px;
    height: 32px;
    border: none;
    background-color: #E6E5E5;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;

    svg {
        color: #8047F8;
    }
  }
`;

export const QuantityText = styled.p`
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 400;
  line-height: 130%;
  color: #272221;
`;

export const Remove = styled.button`
  width: 91px;
  height: 32px;
  background-color: #E6E5E5;
  padding: 0 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 6px;
  gap: 4px;
  border: none;
  cursor: pointer;
  flex-shrink: 0;

  p {
    font-family: "Roboto";
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
    color: #574F4D;
    margin: 0;
  }
`;

export const Total = styled.p`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 16px;
  line-height: 130%;
  color: #574F4D;
  white-space: nowrap;
`;

export const PaymentContainer = styled.div`
  background-color: #F3F2F2;
  padding: 40px;
  border-radius: 6px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-sizing: border-box;

  .methods {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
`;

export const PaymentMethod = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #E6E5E5;
  border-radius: 6px;
  gap: 10px;
  padding-left: 16px;
  width: 176px;
  height: 51px;
  background-color: #E6E5E5;
  cursor: pointer;

  &:hover {
    background-color: #EBE5F9;
    border-color: #8047F8;
  }

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #ebe5f9;
      border: 1px solid #8047f8;

      &:hover {
        background-color: #ebe5f9;
      }
    `}
`;

export const PaymentText = styled.p`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 400;
  line-height: 130%;
  color: #574F4D;
  text-transform: uppercase;
`;

export const TotalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 14px;
    color: #574F4D;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    color: #403937;
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  background-color: #DBAC2C;
  color: #FFFFFF;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 12px 8px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #C47F17;
  }
`;

export const ErrorMessage = styled.p`
  font-family: "Roboto";
  font-size: 12px;
  color: #ff0000;
  margin: 4px 0 0 0;
  padding: 0;
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  margin: 40px 160px;
  gap: 24px;
`;

export const EmptyCartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background-color: #F3F2F2;
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const EmptyCartTitle = styled.h2`
  font-family: "Baloo 2";
  font-size: 32px;
  font-weight: bold;
  line-height: 130%;
  color: #403937;
  text-align: center;
  margin: 0;
`;

export const EmptyCartText = styled.p`
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 400;
  line-height: 130%;
  color: #574F4D;
  text-align: center;
  max-width: 500px;
  margin: 0;
`;

export const EmptyCartButton = styled.button`
  margin-top: 16px;
  padding: 12px 24px;
  background-color: #DBAC2C;
  color: #FFFFFF;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #C47F17;
  }
`;