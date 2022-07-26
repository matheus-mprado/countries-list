/* eslint-disable */
import { useState } from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

import { FormContainer, SelectContainer } from '../pages/Home/styles';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com',
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
  }[];
}

export function CountrySelect() {
  const [country, setCountry] = useState('BR');
  const { data, loading, error } = useQuery<GetListCountriesResponse>(
    LIST_COUNTRIES,
    { client }
  );

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <>
      <FormContainer>
        <SelectContainer
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          {data?.countries.map((country: any) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </SelectContainer>
      </FormContainer>
    </>
  );
}
