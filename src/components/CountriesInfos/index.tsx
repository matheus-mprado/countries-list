/* eslint-disable */

import { useEffect, useState } from "react";
import { useCountry } from "../../hooks/useCountry";
import { CountdownContainer, CountrySettings } from "../../pages/Home/styles";

interface countriesData {
  name: string;
  code: string;
  capital: string;
  emoji: string;
  currency: string;
  languages: {
    code: string;
    name: string;
  }[];
}

export function CountriesInfos() {
  const { country, dataCountrys } = useCountry();
  const [currentCountry, setCurrentCountry] = useState<countriesData>({} as countriesData);

  useEffect(() => {
    let result = dataCountrys?.countries.filter(
      (item) => item?.code === country
    );
    if (result) {
      setCurrentCountry(result[0]);
    }
    console.log(result, "teste");
  }, [country, dataCountrys]);

  return (
    <>
      <CountdownContainer>
        <CountrySettings>
          <p>
            Nome do país: <span>{currentCountry?.code}</span>
          </p>
          <p>
            Capital: <span>{currentCountry?.capital}</span>
          </p>
        </CountrySettings>
        <CountrySettings>
          <p>
            Moeda: <span>{currentCountry?.currency}</span>
          </p>
          <p>
            Emoji: <span>{currentCountry?.emoji}</span>
          </p>
        </CountrySettings>
      </CountdownContainer>
    </>
  );
}
