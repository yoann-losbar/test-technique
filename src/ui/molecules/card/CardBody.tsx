import React from 'react'
import styled from 'styled-components'

const StyledCardBody = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: ${(props: CardBodyProps) => {
    return props.direction === 'column' ? 'column' : 'row'
}};
    justify-content: space-between;
`

interface CardBodyProps {
  children: React.ReactNode
  direction?: 'column' | 'row'
}

export const CardBody: React.FC<CardBodyProps> = (props) => {
  return <StyledCardBody {...props}>
        {props.children}
    </StyledCardBody>
}

export default CardBody
