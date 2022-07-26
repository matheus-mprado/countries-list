/* eslint-disable */

import { CountdownContainer, CountrySettings } from '../../pages/Home/styles';

export function CountriesInfos() {
  return (
    <>
      <CountdownContainer>
        <CountrySettings>
          <p>
            Nome do país: <span>Brasil</span>
          </p>
          <p>
            Capital: <span>Brasília</span>
          </p>
        </CountrySettings>
        <CountrySettings>
          <p>
            Idioma falado: <span>português</span>
          </p>
          <p>
            Moeda: <span>BRL</span>
          </p>
          <p>
            Emoji: <span>BRL</span>
          </p>
        </CountrySettings>
      </CountdownContainer>
    </>
  );
}
