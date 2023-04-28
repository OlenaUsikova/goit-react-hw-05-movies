import PropTypes from 'prop-types';
import { SearchForm, SearchFormButton, SearchFormInput } from './StyledSearch';
import { useState } from 'react';

export const SearchMovie = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(inputValue)
    {onSubmit(inputValue)};
  };
  const handleChange = e => {
    const { value } = e.target;
    setInputValue(value.toLowerCase().trim());
  };
   return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit" disabled={inputValue ? false : true}
>
          Search
        </SearchFormButton>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
          onChange={handleChange}
         />
      </SearchForm>
    </>
  );
};
SearchMovie.propTypes = {
  onSubmit: PropTypes.func,
};
