import styled from "styled-components"

export const CardContainer = styled.div`
  width: 100%;
  max-width: 256px;
  min-height: 330px;
  height: auto;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  position: relative;
  background-color: #F3F2F2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
    min-height: 280px;
  }

  @media (max-width: 480px) {
    min-height: 260px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`

export const CoffeeImg = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1));
`

export const Type = styled.div`
  margin-top: 90px;
  background-color: #F1E9C9;
  height: 21px;
  border-radius: 20px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  align-content: center;
`

export const TypeText = styled.span`
  color: #C47F17;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 10px;
  line-height: 130%;
  text-transform: uppercase;
`

export const CoffeeText = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 216px;
  min-height: 80px;
  padding: 0 5px;
  box-sizing: border-box;
`

export const CoffeeName = styled.h2`
  font-size: 20px;
  font-family: "Baloo 2";
  font-weight: bold;
  letter-spacing: 130%;
  color: #403937;
`

export const CoffeeDescription = styled.p`
  font-size: 14px;
  font-family: "Roboto";
  font-weight: 400;
  letter-spacing: 130%;
  color: #8D8686;
  text-align: center;
  margin-top: 10px;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 258px;
  color: #574F4D;
  line-height: 130%;
  margin: 50px 0 -30px 0;
  padding: 0 10px;
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 768px) {
    margin: 40px 0 0 0;
  }

  @media (max-width: 480px) {
    margin: 30px 0 0 0;
    gap: 6px;
  }

  div{
    margin-left: 10px;
    display: flex;

    @media (max-width: 480px) {
      margin-left: 6px;
    }
  }
`


export const Currency = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
`

export const Value = styled.strong`
  margin-left: 3px;
  font-family: "Baloo 2";
  font-size: 24px;
  font-weight: 900;
`

export const QuantityButton = styled.div`
  width: 72px;
  height: 38px;
  background-color: #E6E5E5;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 6px;

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
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const CartAdd = styled.div`
  width: 38px;
  height: 38px;
  background-color: #4B2995;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`