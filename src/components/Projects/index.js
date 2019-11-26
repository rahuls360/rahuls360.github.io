import React from 'react';
import { Container } from "../../globalStyles";
import { Grid } from './styles';
import Card from './Card';
import data from './data';

// import zzz from '../../assets/zzzzz';

const Project = () => {
  return (
    <Container>
      <h2 style={styles.center}>Projects</h2>
      <Grid>
        {data.map(project => (
          <Card img={project.image} tags={project.tags} title={project.title}/>
        ))}
      </Grid>
    </Container>
  );
}

const styles = {
  center: {
    textAlign: 'center'
  }
}

export default Project;