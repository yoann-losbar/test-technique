import React from 'react'
import styled from 'styled-components'

const StyledAccentLight = styled.span`
    font-size: .85em;
    font-family: Medium;
    font-weight: 550;
    color: #55626f;
`

interface AccentLightProps {
  children?: React.ReactNode
}

export const AccentLight: React.FC<AccentLightProps> = (props) => (<StyledAccentLight {...props}>
    {props.children}
</StyledAccentLight>)

export default AccentLight
