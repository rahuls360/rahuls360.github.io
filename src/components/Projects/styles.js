import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  @media (max-width: 1200px){
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px){
    grid-template-columns: 1fr;
  }
`;