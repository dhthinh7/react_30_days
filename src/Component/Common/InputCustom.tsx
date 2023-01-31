import { IDataMultiStepForm } from 'interface/MultiStep';
import * as React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

export interface IInputCustomProps {
  id: Path<IDataMultiStepForm>;
  placeHolder: string;
  label: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register?: any;
}

export default function InputCustom({ id, placeHolder, label, type = "text", value, onChange, register }: IInputCustomProps) {
  return <InputCustomWrapper>
    <label htmlFor={id}>{label}</label>
    <input
      {...register(id)}
      type={type}
      id=''
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
  </InputCustomWrapper>
}

const InputCustomWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10px 0;
  label {
    flex: 0 0 20%;
  }

  input {
    flex: 0 0 80%;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-size: 16px;
    background-color: lightgrey;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;
    &:focus {
      border-color: blue;
    }
  }
`
