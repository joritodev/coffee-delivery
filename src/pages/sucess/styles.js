import styled from 'styled-components';

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
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
`;

export const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #403937;
  line-height: 1.3;
  margin-top: 4px;
`;

export const OrderInfoBorder = styled.div`
  max-width: 450px;
  margin-top: 2.5rem;
  padding: 1px;
  
  background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
    
  border-radius: 6px 36px; 
`;

export const OrderInfoCard = styled.div`
  color: #574F4D;
  padding: 2rem;
  background: #FAFAFA;
  
  border-radius: 5px 35px; 
  
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

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
  border-radius: 50%;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.3;

  strong {
    font-weight: 700;
  }
`;

export const ImageContent = styled.div`
  flex-shrink: 0;
`;

export const Illustration = styled.img`
  width: 100%;
  max-width: 492px;
  
  @media (max-width: 900px) {
    max-width: 350px;
    margin-top: 2rem;
  }
`;