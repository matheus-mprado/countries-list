/* eslint-disable */

import { useState } from "react";
import { CountriesInfos } from "../../components/CountriesInfos";
import { SearchCountry } from "../../components/SearchCountry";
import { HomeContainer } from "./styles";

export function Home() {
  const [country, setCountry] = useState("BR");

  return (
    <HomeContainer>
      <SearchCountry />
      <CountriesInfos />
    </HomeContainer>
  );
}
