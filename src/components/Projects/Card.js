import React from 'react';
import styled from 'styled-components';

const Card = ({ img, tags, title, url}) => {
  return (
    <CardContainer>
      <a href={url} target="_blank" rel="noopener noreferrer"><img src={img} alt="portfolio" /></a>
      <h4 >{title}</h4>
      <span>{tags.join(' | ')}</span>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  border: 1px solid #eee;
  overflow: hidden;
  img {
    height: auto;
    width: 100%;
    max-height: 250px;
  }
  h4 {
    margin: 0;
  }
  span {
    color: darkgray;
  }
`;

export default Card;