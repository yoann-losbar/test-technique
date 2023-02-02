import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  padding: 10px 30px 10px 30px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px;
  display: flex;
  user-select: none;
  justify-content: center;
  background-color: ${(props: ButtonProps) => {
    if (props.primary ?? false) return '#348afb'
    if (props.light ?? false) return 'white'
  }};
  color: ${(props: ButtonProps) => {
    if (props.primary ?? false) return 'white'
    if (props.light ?? false) return 'black'
  }};
  border: 1px solid ${(props: ButtonProps) => {
    if (props.primary ?? false) return '#348afb'
    if (props.light ?? false) return 'white'
  }};

  &:hover {
    box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
  }
`

interface ButtonProps {
  primary?: boolean
  light?: boolean
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  role?: string
}

export const Button: React.FC<ButtonProps> = (props) => (<StyledButton {...props}>
    {props.children}
</StyledButton>)

Button.defaultProps = {
  primary: false
}

export default Button
