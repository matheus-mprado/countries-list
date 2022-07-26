/* eslint-disable */
import { useEffect, useMemo, useState } from "react";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";

import { FormContainer, SelectContainer } from "../pages/Home/styles";
import { CountriesInfos } from "./CountriesInfos";
import { useCountry } from "../hooks/useCountry";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

const LIST_COUNTRIES = gql`
  query {
    countries {
      name
      code
      capital
      emoji
    }
  }
`;

interface GetListCountriesResponse {
  countries: {
    name: string;
    code: string;
    capital: string;
    emoji: string;
    currency: string;
    languages: {
      code: string;
      name: string;
    }[];
  }[];
}

export function CountrySelect() {
  const { country, handleSetCountry, dataCountrys } = useCountry();

  console.log(dataCountrys,"aaa")

  function handleChangeCountry(country: string) {
    console.log(country);
    handleSetCountry(country);
  }

  return (
    <>
      <FormContainer>
        <SelectContainer
          onChange={(event) => handleChangeCountry(event.target.value)} 
          value={country}
        >
          {dataCountrys?.countries.map((country: any) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </SelectContainer>
      </FormContainer>
    </>
  );
}
