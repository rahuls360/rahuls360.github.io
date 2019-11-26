import React from 'react';

const Card = ({ img, tags, title}) => {
  return (
    <div style={styles.card}>
      <img src={img} alt="portfolio" style={styles.image}/>
      <h4 style={styles.heading}>{title}</h4>
      <span style={styles.span}>{tags.join(' | ')}</span>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #eee',
    overflow: 'hidden'
  },
  image: {
    height: '300px',
    width: '100%'
  },
  heading: {
    margin: 0
  },
  span: {
    color: 'darkgray'
  }
}

export default Card;