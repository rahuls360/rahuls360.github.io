import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  @media (max-width: 700px) {
    /* margin-left: 40px; */
    flex-direction: column;
  }
  img {
    height: auto;
    overflow: hidden;
    width: 100%;
    max-width: 600px;
    margin: auto;
  }
  & > div {
    margin-left: 60px;
    @media (max-width: 700px) {
      margin-left: 40px;
      order: -1;
      margin-bottom: 20px;
    }
  }
  `;