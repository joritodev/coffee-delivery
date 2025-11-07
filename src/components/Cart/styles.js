import styled from "styled-components";

export const CartContainer = styled.div`
  width: 38px;
  min-width: 38px;
  height: 100%;
  max-height: 40px;
  background-color: #F1E9C9;
  border-radius: 6px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #E6D9B8;
  }

  @media (max-width: 768px) {
    width: 36px;
    min-width: 36px;
    max-height: 36px;
  }

  @media (max-width: 480px) {
    width: 32px;
    min-width: 32px;
    max-height: 32px;
  }
`

export const CartQuantity = styled.div`
  width: 20px;
  height: 20px;
  min-width: 20px;
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
  z-index: 1;

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    min-width: 18px;
    font-size: 11px;
    top: -6px;
    right: -6px;
  }
`