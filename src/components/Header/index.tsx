/* eslint-disable */

import { HeaderContainer } from './styles';
import { GlobeHemisphereWest, ListDashes } from 'phosphor-react';

import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <GlobeHemisphereWest size={32} className="logo" />

      <nav>
        <NavLink to="/" title="List countries">
          <ListDashes size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
