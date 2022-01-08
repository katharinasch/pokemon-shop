import styled from 'styled-components';
import Logo from '../../Logo.png';
import Counter from './Counter';

const Nav = styled.nav` 
    font-size: 18px;
    position: sticky;
    top: 0;
    z-index: 999;
    height: 80px;
    background-color: #d8e2dc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px 0px 30px;
`;
const NavImage = styled.img`
    height: 60px;
`;


const Navbar = ({count}) => {
    return (
        <Nav>
            <NavImage alt="Logo" src={Logo}/>
            <Counter count={count} />
        </Nav>
    )
}

export default Navbar;