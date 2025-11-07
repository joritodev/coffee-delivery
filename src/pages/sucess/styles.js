import styled from 'styled-components';

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 32px;
  font-weight: bolder;
  color: #C47F17;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #403937;
  line-height: 1.3;
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const OrderInfoBorder = styled.div`
  max-width: 450px;
  width: 100%;
  margin-top: 2.5rem;
  padding: 1px;
  
  background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
    
  border-radius: 6px 36px;
  box-sizing: border-box;

  @media (max-width: 968px) {
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 480px) {
    margin-top: 2rem;
    border-radius: 6px 24px;
  }
`;

export const OrderInfoCard = styled.div`
  color: #574F4D;
  padding: 2rem;
  background: #FAFAFA;
  width: 100%;
  
  border-radius: 5px 35px; 
  
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    gap: 1.25rem;
    border-radius: 4px 24px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }

  .purple {
    background-color: #8047F8;
  }

  .yellow {
    background: #DBAC2C
  }

  .yellow-dark {
    background: #C47F17
  }
`;

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    min-width: 28px;
  }
`;

export const InfoText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.3;
  flex: 1;
  min-width: 0;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }

  strong {
    font-weight: 700;
  }
`;

export const ImageContent = styled.div`
  flex-shrink: 0;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 968px) {
    order: -1;
  }
`;

export const Illustration = styled.img`
  width: 100%;
  max-width: 492px;
  height: auto;
  
  @media (max-width: 968px) {
    max-width: 400px;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    max-width: 350px;
  }

  @media (max-width: 480px) {
    max-width: 280px;
  }
`;