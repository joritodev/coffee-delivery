import styled from "styled-components"

export const AboutContainer = styled.div`
  margin: 0 160px;
  min-height: 544px;
  height: auto;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 56px;
  padding: 40px 0;

  @media (max-width: 1200px) {
    margin: 0 80px;
    gap: 40px;
  }

  @media (max-width: 968px) {
    margin: 0 40px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 32px;
    padding: 32px 0;
  }

  @media (max-width: 768px) {
    margin: 0 20px;
    gap: 24px;
    padding: 24px 0;
  }

  @media (max-width: 480px) {
    margin: 0 16px;
    gap: 20px;
    padding: 20px 0;
  }

  img {
    width: 100%;
    max-width: 476px;
    height: auto;
    flex-shrink: 0;

    @media (max-width: 968px) {
      max-width: 400px;
    }

    @media (max-width: 768px) {
      max-width: 350px;
    }

    @media (max-width: 480px) {
      max-width: 280px;
    }
  }
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-size: 48px;
  line-height: 130%;
  font-weight: 900;
  color: #272221;
  margin-bottom: 20px;

  @media (max-width: 968px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 12px;
  }
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 130%;
  font-weight: 400;
  color: #403937;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`

export const Benefits = styled.div`
  width: 100%;
  max-width: 640px;
  min-height: 84px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 14px;

  @media (max-width: 968px) {
    max-width: 100%;
    justify-items: center;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
    justify-items: flex-start;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }

  div {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    @media (max-width: 640px) {
      max-width: 100%;
    }
  }

  .cart {
    width: 32px;
    height: 32px;
    min-width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #C47F17;
    flex-shrink: 0;
  }

  .timer {
    width: 32px;
    height: 32px;
    min-width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #DBAC2C;
    flex-shrink: 0;
  }

  .package {
    width: 32px;
    height: 32px;
    min-width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #574F4D;
    flex-shrink: 0;
  }

  .coffee {
    width: 32px;
    height: 32px;
    min-width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #8047F8;
    flex-shrink: 0;
  }
`

export const BenefitsText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  color: #574F4D;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`