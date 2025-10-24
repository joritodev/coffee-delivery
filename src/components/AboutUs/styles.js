import styled from "styled-components"

export const AboutContainer = styled.div`
  margin: 0 160px;
  height: 544px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-size: 48px;
  line-height: 130%;
  font-weight: 900;
  color: #272221;
  margin-bottom: 20px;
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 130%;
  font-weight: 400;
  color: #403937;

  margin-bottom: 30px;
`

export const Benefits = styled.div`
  width: 367px;
  height: 84px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    width: 300px;
    margin-right: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .cart {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #C47F17;
  }

  .timer {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #DBAC2C;
  }

  .package {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #574F4D;
  }

  .coffee {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #8047F8;
  }
`

export const BenefitsText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  color: #574F4D;
`