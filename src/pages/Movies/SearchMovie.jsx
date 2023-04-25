import { BsSearchHeart } from 'react-icons/bs';
import {
    SearchForm,
    SearchFormButton,
    SearchFormInput,
  } from './StyledSearch';

export const SearchMovie = ({ onSubmit }) => {
    const handleSubmit = e => {
      e.preventDefault();
      onSubmit(e.target.elements.query.value);
    };
    return (
      <>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <BsSearchHeart />
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