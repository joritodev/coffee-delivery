import styled from "styled-components";

export const ListContainer = styled.div`
  margin: 0 160px 50px 160px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 1200px) {
    margin: 0 80px 50px 80px;
  }
  
  @media (max-width: 768px) {
    margin: 0 40px 50px 40px;
  }
  
  @media (max-width: 480px) {
    margin: 0 20px 50px 20px;
  }
`

export const Title = styled.h2`
  width: 100%;
  font-family: "Baloo 2";
  font-size: 36px;
  font-weight: 900;
  line-height: 130%;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`
export const ListGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-auto-rows: auto;
    gap: 40px 10px;
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 32px 8px;
    }

    @media (max-width: 640px) {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 24px 8px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 20px 0;
    }
` 