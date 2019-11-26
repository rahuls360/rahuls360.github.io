import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  @media (max-width: 700px) {
    /* margin-left: 40px; */
    flex-direction: column;
  }
  img {
    overflow: hidden;
    height: 220px;
    width: 220px;
    border-radius: 50%;
    margin-top: 0.83em;
    @media (max-width: 700px) {
      margin: auto;
    }
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