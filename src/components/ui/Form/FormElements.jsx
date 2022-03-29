import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormInfo = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 1.3rem;
  text-align: center;
  font-family: var(--fontsecondary);
  background-color: var(--darker);

  h1 {
    font-family: 'PT Sans', sans-serif;
    color: var(--white);
    margin-bottom: 2rem;
  }
`;

export const FormInput = styled(Field)`
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  resize: none;
  background-color: var(--white);
  font-family: var(--fontsecondary);

  &::placeholder {
    color: var(--darker);
  }
`;

export const FormTextArea = styled.textarea`
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  resize: none;
  background-color: var(--white);

  &::placeholder {
    color: var(--darker);
  }
`;

export const FormSubmit = styled.input`
  margin-top: 1.5rem;
  border: 1px solid var(--darker);
  border-radius: 0.6rem;
  background-color: var(--white) !important;
  color: var(--darker);
  font-size: bold;
  font-family: var(--fontprimary);
  min-width: 10rem;
  align-self: center;
  padding: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--black);
    transform: scale(1.02);
  }
`;

export const FormError = styled(ErrorMessage)`
  padding: 0.4rem;
  background-color: #e23737;
  border-radius: 0.7rem;
  color: var(--brighter);
  width: 75%;
  align-self: center;
`;
