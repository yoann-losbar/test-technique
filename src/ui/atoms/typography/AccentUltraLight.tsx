import React from 'react'
import styled from 'styled-components'

const StyledAccentUltraLight = styled.span`
  font-size: .85em;
  font-family: Medium;
  color: #808991;

  ${(props: AccentUltraLightProps) => (props.active === false) && `
    font-weight: 100;
    color: #cbc5c5;
  `}
`

interface AccentUltraLightProps {
  children?: React.ReactNode
  active?: boolean
}

export const AccentUltraLight: React.FC<AccentUltraLightProps> = (props) => (<StyledAccentUltraLight {...props}>
    {props.children}
</StyledAccentUltraLight>)

AccentUltraLight.defaultProps = {
  active: false
}

export default AccentUltraLight
