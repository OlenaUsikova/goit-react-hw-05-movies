
import {
    SearchForm,
    SearchFormButton,
    SearchFormInput,
  } from './StyledSearch';

export const SearchMovie = ({ onSubmit }) => {
    const handleSubmit = e => {
      e.preventDefault();
      onSubmit(e.target.elements.query.value);
      // form.reset()
    };
    return (
      <>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
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