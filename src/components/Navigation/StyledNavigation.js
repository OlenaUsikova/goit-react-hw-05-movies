import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  background-color: white;
 
  &.active {
    color: red;
  }
`;
export const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
  flex-direction: row;
  padding-left:20px;
  border-bottom: 1px black;
  background-color: lightblue;
`