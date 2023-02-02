import React from 'react'
import styled from 'styled-components'

const StyledCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${(props: CardHeaderProps) => props.padding}px;
`

interface CardHeaderProps {
  children: React.ReactNode
  padding: number
}

export const CardHeader: React.FC<CardHeaderProps> = (props) => {
  return <StyledCardHeader {...props}>
        {props.children}
    </StyledCardHeader>
}

export default CardHeader
