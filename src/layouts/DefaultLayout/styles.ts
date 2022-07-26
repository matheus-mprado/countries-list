/* eslint-disable */

import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['blue-500']};
  border-radius: 8px;
`;
