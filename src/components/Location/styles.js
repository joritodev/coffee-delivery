import styled from "styled-components";

export const LocationContainer = styled.div`
  width: calc(100% - 50px);
  min-width: 120px;
  height: 100%;
  max-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #EBE5F9;
  border-radius: 6px;
  padding: 8px 12px;
  box-sizing: border-box;
  gap: 4px;
  flex-shrink: 1;

  @media (max-width: 768px) {
    width: auto;
    min-width: 100px;
    padding: 6px 10px;
    max-height: 36px;
  }

  @media (max-width: 480px) {
    min-width: 80px;
    padding: 5px 8px;
    max-height: 32px;
    gap: 3px;
  }
`

export const Locale = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 130%;
  font-weight: 400;
  color: #4B2995;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;

  @media (max-width: 768px) {
    font-size: 13px;
    max-width: 120px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    max-width: 100px;
  }
`

