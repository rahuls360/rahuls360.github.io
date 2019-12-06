import React from 'react';
import styled from 'styled-components';

const Card = ({ img, tags, title, url, disabled}) => {
  return (
    <CardContainer>
      <span className={disabled && "disabled-title"} title={disabled && 'Repository is private'}>
        <a href={url} target="_blank" rel="noopener noreferrer" className={disabled && 'disabled'}><img src={img} alt="portfolio" /></a>
      </span>
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
  a.disabled{
    pointer-events: none;
  }
  h4 {
    margin: 0;
  }
  span {
    color: darkgray;
  }
  span.disabled-title{
    height: 100%;
    display: inline-block;
  }
`;

export default Card;