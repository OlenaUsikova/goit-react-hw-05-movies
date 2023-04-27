import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledSection = styled.div`
    display: flex;
    gap: 20px;
    padding-left: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`
export const Subtitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin: 20px 30px;
   
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-size: 20px;
  margin-left: 10px;
  padding: 5px;
  text-decoration: underline;
   &.active {
    color: blue;
    font-size: 26px;
  };
  &:hover {
    /* text-decoration: underline; */
    border-bottom: 1px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  }
`