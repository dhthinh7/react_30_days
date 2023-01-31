import * as React from 'react';
import styled from 'styled-components';

export interface IFormItemProps {
  title: string
  children: React.ReactNode
}

export default function FormItem(props: IFormItemProps) {
  const { title, children } = props
  return <FormItemWrapper>
    <h2>{title}</h2>
    {children}
  </FormItemWrapper>

}


const FormItemWrapper = styled.div`
  h2 {
    color: red;
    text-align: center;
    margin-bottom: 1rem;
  }
`