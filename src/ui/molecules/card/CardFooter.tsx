import React from 'react'
import styled from 'styled-components'

const StyledCardFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 15px;
`

interface CardFooterProps {
  children: React.ReactNode
}

export const CardFooter: React.FC<CardFooterProps> = (props) => {
  return <StyledCardFooter {...props}>
        {props.children}
    </StyledCardFooter>
}

export default CardFooter
