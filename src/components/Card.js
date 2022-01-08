import styled from "styled-components";
import Buttons from './Buttons';

const CardWrapper = styled.div`
  overflow: hidden;
  width: 300px;
  padding: 50px 0px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  text-align: center;
  background-color: #d8e2dc;
`;

const CardImage = styled.img`
  height: 200px;
  margin-bottom: 50px;

`;

const Card = ({source, text, increment, decrement}) => {
  return (
    <>
      <CardWrapper>
        <CardImage src={source} alt={text} />
        <Buttons
          increment={increment}
          decrement={decrement}
        />
      </CardWrapper>
    </>
  )
}

export default Card;