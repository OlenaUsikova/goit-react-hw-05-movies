import PropTypes from 'prop-types';
import { SearchForm, SearchFormButton, SearchFormInput } from './StyledSearch';

export const SearchMovie = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if(e.target.elements.query.value)
    {onSubmit(e.target.elements.query.value)};
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit" >
          Search
        </SearchFormButton>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
        />
      </SearchForm>
    </>
  );
};
SearchMovie.propTypes = {
  onSubmit: PropTypes.func,
};
