import GlobalStyle from './globalStyle';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card';
import styled from 'styled-components';
import React, { useState } from "react";

const images  = [
  {
    cathegory: 'pikachu',
    imgURL: 'https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_1280.png'
  },
  {
    cathegory: 'squirtle',
    imgURL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
  },
  {
    cathegory: 'charmander',
    imgURL: 'https://freepngimg.com/thumb/pokemon/119343-picture-charmander-pokemon-download-hd.png'
  },
]


const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1000px) {grid-template-columns: 1fr; justify-items: center; grid-gap: 50px;}
  
`;

const Container = styled.div`
  padding: 100px 400px;
  @media (max-width: 1800px) {padding: 100px 200px;}
  @media (max-width: 1350px) {padding: 100px 100px;}
  @media (max-width: 1150px) {padding: 100px 20px;}
  
`;

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if(count >=1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Navbar count={count}/>
      <Container>
        <Grid>
          {images.map((image, index) => (
            <Card 
              key={index}
              source={image.imgURL}
              text={`image of ${image.cathegory} `}
              increment={increment}
              decrement={decrement}
              count={count}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;