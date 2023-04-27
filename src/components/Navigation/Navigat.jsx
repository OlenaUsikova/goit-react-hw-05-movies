// import { useSearchParams } from "react-router-dom";
import { StyledNavLink, StyledNav } from "./StyledNavigation";

// const [searchParams, setSearchParams] = useSearchParams();


export const Navigat = () => {
  return (
    <StyledNav>
        <p>
          <StyledNavLink to="/">Home</StyledNavLink>
        </p>
        <p>
          <StyledNavLink to="movies">Movies</StyledNavLink>
        </p>
        
    </StyledNav>
  );
};