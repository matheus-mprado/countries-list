/* eslint-disable */
import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;

  flex-wrap: wrap;
`;

export const SelectContainer = styled.select`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  option {
    background: ${(props) => props.theme['gray-900']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-500']};
  }
`;

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  margin-top: 5rem;

  color: ${(props) => props.theme['gray-100']};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['yellow-500']};
    padding: 0.3rem;
    border-radius: 8px;
  }
`;

export const CountrySettings = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const SearchButton = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 1rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-100']};

  transition: background 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['gray-800']};
  }
`;
