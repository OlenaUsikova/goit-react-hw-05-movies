import { StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="movies">Movies</StyledNavLink>
        </li>
        </ul>
    </nav>
  );
};