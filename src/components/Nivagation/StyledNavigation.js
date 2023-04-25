import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  background-color: lightskyblue;
  &.active {
    color: blue;
  }
`;