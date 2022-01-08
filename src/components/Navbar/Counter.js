import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Paragraph = styled.p`

  font-weight: bold;
  margin: 0;
`;

const Counter = ({count}) => {
  return (
    <>
    <CartWrapper>
      <Paragraph>{count}</Paragraph>
      <ShoppingCartIcon />
    </CartWrapper>
    </>
  )
}

export default Counter;