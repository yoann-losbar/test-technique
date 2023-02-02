import React from 'react'
import styled from 'styled-components'

const StyledFlexboxContainer = styled.div`
  display: flex;
  justify-content: ${(props: FlexboxContainerProps) => {
    return props.justifyContent
  }};
  flex-direction: ${(props: FlexboxContainerProps) => props.direction === 'column' ? 'column' : 'row'};
`

interface FlexboxContainerProps {
  direction?: 'column' | 'row'
  children?: React.ReactNode
  justifyContent?: 'space-between' | 'flex-start'
}

export const FlexContainer: React.FC<FlexboxContainerProps> = (props) => {
  return <StyledFlexboxContainer {...props}>
        {props.children}
    </StyledFlexboxContainer>
}

export default FlexContainer
