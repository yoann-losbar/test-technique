import React from 'react'
import styled from 'styled-components'

const StyledText = styled.span`
    font-size: ${(props: TextProps) => {
    return props.size === 'light' ? '.7em' : '.85em'
}};
    font-family: ${(props: TextProps) => {
    return props.size === 'light' ? 'Light' : 'SemiBold'
}};
    font-weight: ${(props: TextProps) => {
    return props.size === 'light' ? 'normal' : 'bold'
}};
`

interface TextProps {
  children?: React.ReactNode
  size: 'light' | 'strong'
}

export const Text: React.FC<TextProps> = (props) => {
  return <StyledText {...props}>
        {props.children}
    </StyledText>
}

export default Text
