import React from 'react'
import styled from 'styled-components'

const StyledInteractableText = styled.span`
    font-size: .65em;
    color: #5889d2;
    font-family: SemiBold;
    font-weight: bold;
  margin-left: 10px;
`

interface InteractableProps {
  children?: React.ReactNode
}

export const InteractableText: React.FC<InteractableProps> = (props) => (<StyledInteractableText {...props}>
    {props.children}
</StyledInteractableText>)

export default InteractableText
