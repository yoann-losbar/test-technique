import React from 'react'
import styled from 'styled-components'

const StyledLightText = styled.span`
    font-size: .7em;
    font-family: Light;
`

interface LightTextProps {
  children?: React.ReactNode
}

export const LightText: React.FC<LightTextProps> = (props) => (<StyledLightText {...props}>
    {props.children}
</StyledLightText>)

export default LightText
