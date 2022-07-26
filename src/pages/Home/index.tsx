/* eslint-disable */

import { CountriesInfos } from '../../components/CountriesInfos';
import { SearchCountry } from '../../components/SearchCountry';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <SearchCountry />
      <CountriesInfos />
    </HomeContainer>
  );
}
