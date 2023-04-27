import styled from 'styled-components'

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    margin-top: 10px;
    `
export const SearchFormButton = styled.button`
    display: inline-block;
    width: 90px;
    height: 48px;
    border: 0;
    font-size:18px;
    margin-left: 15px;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    &:hover {
    opacity: 1;}
    `

export const SearchFormInput  = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 18px;
    border: 1px;
    outline: none;
    margin-left: 25px;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 8px;
    &::placeholder {
    font: inherit;
    }
    `