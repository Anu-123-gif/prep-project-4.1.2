import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import WeatherDetails from './WeatherDetails';

const GridContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
  background-color: green;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

const Div1 = styled.div`
  grid-column: 4 / span 2;
  background: rgba(63, 68, 71, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 8px;
  min-height: 100px;

  @media (max-width: 1000px) {
    grid-column: 1 / span 5;
  }
`;

const Div2 = styled.div`
  grid-column: 1 / span 5;
  background: rgba(63, 68, 71, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 8px;
  min-height: 100px;

  @media (max-width: 1000px) {
    grid-column: 1 / span 5;
  }
`;

const WeatherGrid = () => (
  <GridContainer>
    <WeatherDetails />

    <Div1>Div1</Div1>
    <Div2>Div2</Div2>
  </GridContainer>
);

export default WeatherGrid;
