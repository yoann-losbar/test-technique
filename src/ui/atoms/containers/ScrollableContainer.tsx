import React from 'react'
import styled from 'styled-components'

const StyledScrollableContainer = styled.div`
    height: ${(props: ScrollableContainerProps) => props.height}px;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
`

interface ScrollableContainerProps {
  children?: React.ReactNode
  height: number
}

export const ScrollableContainer: React.FC<ScrollableContainerProps> = (props) => (<StyledScrollableContainer {...props}>
    {props.children}
</StyledScrollableContainer>)

export default ScrollableContainer
