import React from 'react'
import styled from 'styled-components'
import Input from 'ui/atoms/input/Input'
import { LightText } from '../../atoms/typography'
import { FlexboxSpace } from '../../atoms/containers'

const StyledInputField = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: ${(props: InputFieldProps) => props.width}px;
  justify-content: flex-start;
  align-items: center;
  padding: ${(props: InputFieldProps) => props.padding}px;
`

interface InputProps {
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  role?: string
}

interface InputFieldProps {
  children?: React.ReactNode
  spaceBetween: number
  width: number
  label: string
  padding?: number
  value?: string

}

export const InputField: React.FC<InputFieldProps & InputProps> = ({ onChange, role, ...rest }) => {
  return <StyledInputField {...rest}>
        <LightText>{rest.label}</LightText>
        <FlexboxSpace width={rest.spaceBetween}/>
        <Input role={role} onChange={onChange} value={rest.value}/>
    </StyledInputField>
}

export default InputField
