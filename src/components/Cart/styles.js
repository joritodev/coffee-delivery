import styled from "styled-components";

export const CartContainer = styled.div`
  width: 38px;
  height: 100%;
  background-color: #F1E9C9;
  border-radius: 6px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const CartQuantity = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 12px;
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #C47F17;
  border-radius: 50%;
  color: #FFFFFF;
`