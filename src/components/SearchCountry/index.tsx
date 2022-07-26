/* eslint-disable */

import { MagnifyingGlass } from 'phosphor-react';
import { FormContainer, SearchButton } from '../../pages/Home/styles';
import { CountrySelect } from '../CountrySelect';

export function SearchCountry() {
  return (
    <form action="">
      <FormContainer>
        <label htmlFor="contry">Selecione um país</label>
        <CountrySelect />
      </FormContainer>

      <SearchButton type="submit">
        <MagnifyingGlass size={24} />
        Pesquisar
      </SearchButton>
    </form>
  );
}
