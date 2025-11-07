import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 100vw;
  min-height: 104px;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  padding: 20px 10%;
  box-sizing: border-box;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 16px 5%;
    min-height: 80px;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    padding: 12px 4%;
    min-height: 70px;
  }
`

export const HeaderLogo = styled.img`
  width: 85px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 70px;
    height: 33px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 28px;
  }
`

export const HeaderDiv = styled.div`
  min-width: 193px;
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    min-width: auto;
    height: 36px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    height: 32px;
    gap: 6px;
  }
`
