import React from 'react'
import styled from 'styled-components'

const StyledAccentMain = styled.span`
    font-size: .85em;
    font-family: SemiBold;
    font-weight: bold;
`

interface AccentMainProps {
  children?: React.ReactNode
}

export const AccentMain: React.FC<AccentMainProps> = (props) => (<StyledAccentMain {...props}>
    {props.children}
</StyledAccentMain>)

export default AccentMain
