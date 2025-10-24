import styled, { css } from "styled-components";

export const FormContainer = styled.div`
  width: 640px;
  margin: 40px 160px 40px 160px;
  display: flex;
  flex-direction: column;
  
`

export const Title = styled.h2`
  font-family: "Baloo 2";
  font-size: 18px;
  font-weight: bold;
  line-height: 130%;
  color: #403937;
  grid-area: "title";
`

export const Texts = styled.div`
  column-gap: 8px;
  width: 560px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Subtitle = styled.h3`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  color: #403937;
`

export const Text = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  color: #574F4D;
`

export const DeliveryDetails = styled.form`
  background-color: #f7f7f7;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const FormRow = styled.div`
  display: flex;
  gap: 1rem; 
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: #ededed;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  color: #333;
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: 2px solid #aaa;
    
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
  right: 1rem;
  color: #999;
  font-size: 12px;
  line-height: 130%;
  font-weight: 400;
  pointer-events: none;
`;

export const CheckoutList = styled.div`
  width: 448px;
  background-color: #F3F2F2;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const ProductContainer = styled.div`
  width: 368px;
  height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const ProductInfos = styled.div`
  display: flex;
  align-items: flex-start;

  div {
    display: flex;
    align-items: flex-start;
  }
`

export const Name = styled.h3`
  font-family: "Roboto";
  font-size: 16px;
  color: #403937;
  line-height: 130%;
`

export const QuantityButton = styled.div`
  width: 72px;
  height: 32px;
  background-color: #E6E5E5;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;

  button {
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`

export const QuantityText = styled.p`
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 400;
  letter-spacing: 130%;
  color: #272221;
`

export const Remove = styled.button`
  width: 91px;
  height: 32px;
  background-color: #E6E5E5;
  padding: 0 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  gap: 4px;
  border: none;

  p {
    font-family: "Roboto";
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
  }
`

export const PaymentContainer = styled.div`
  background-color: #f7f7f7;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  .methods {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }
`

export const PaymentMethod = styled.button`
    display: flex;
    align-items: center; 
    justify-content: flex-start;
    border: 1px solid #E6E5E5;
    border-radius: 6px;

    gap: 10px;
    padding-left: 20px;

    width: 176px;
    height: 51px;
    background-color: #E6E5E5;

    &:hover {
      background-color: #EBE5F9;
      border: 1px solid #8047F8;
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

    
  `

export const PaymentText = styled.p`
    font-family: "Roboto";
    font-size: 12px;
    font-weight: 400;
    line-height: 130%;
    color: #574F4D;
    text-transform: uppercase;
  `
