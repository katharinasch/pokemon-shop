import styled from "styled-components";



const Button = styled.button`
  border-radius: 20px;
  background-color: ${({add}) => add? '#E38B06': '#000'};
  color: ${({add}) => add ? '#000': '#fff'};
  padding: 18px 30px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  border: none;
  margin: 0px 5px;
}`;

const Buttons = ({increment, decrement}) => {

  return (
    <>
      <div>
        <Button add onClick={increment}>Add</Button>  
        <Button onClick={decrement}>Remove</Button>
      </div>
    </>
  )
}

export default Buttons;