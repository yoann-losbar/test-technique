import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 80px;
  font-size: 12px;
  background-color: #f6f7fb;
  border: none;
  height: 30px;
  border-radius: 8px;
  padding-left: 10px;
  :focus {
    outline: 2px solid #415a9b;
  }
`

interface InputProps {
  children?: React.ReactNode
  value?: string
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  role?: string
}

export const Input: React.FC<InputProps> = (props) => (<StyledInput {...props}>{props.children}</StyledInput>)

export default Input
