import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  transition: box-shadow 0.3s ease-in-out;
  padding: 5px;
  border-radius: 8px;
  border-color: #add8e6;
  margin-top: 10px;
`

export const Label = styled.label`
  display: flex;
  
  flex-direction: column;

  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;

  &:hover Input, &:focus Input{
    box-shadow: 0 0 5px #000
  }
`;



export const Btn = styled.button`
  display: block;

  width: 100px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 10px;

  border: none;
  border-radius: 8px;

  background-color: #add8e6;
  transition: background-color 150ms linear, box-shadow 150ms linear,
    color 150ms linear;
  color: #808080;

  cursor: pointer;

  &:hover, &:focus {
    background-color: #7fb3d5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    color: #ffffff;
  }
`;
