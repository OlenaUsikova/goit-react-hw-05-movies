import { StyledNavLink, StyledNav } from "./StyledNavigation";

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