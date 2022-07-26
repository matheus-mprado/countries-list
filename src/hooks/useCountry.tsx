import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import { createContext, ReactNode, useContext, useState } from "react";

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

interface CountryContextData {
  handleSetCountry: (country: string) => void;
  country: string;
  dataCountrys: GetListCountriesResponse;
}

interface CountryContextProps {
  children: ReactNode;
}

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
      currency
      languages {
        code
        name
      }
    }
  }
`;

const CountryContext = createContext<CountryContextData>(
  {} as CountryContextData
);

export function CountryProvider({ children }: CountryContextProps) {
  const [country, setCountry] = useState("BR");

  const {
    data: dataCountrys,
    loading,
    error,
  } = useQuery<GetListCountriesResponse>(LIST_COUNTRIES, { client });

  function handleSetCountry(country: string) {
    setCountry(country);
  }

  return (
    <CountryContext.Provider
      value={{ country, handleSetCountry, dataCountrys }}
    >
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry(): CountryContextData {
  const context = useContext(CountryContext);

  return context;
}
