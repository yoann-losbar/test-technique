import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin: 15px;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;
  width: ${(props: CardProps) => {
    switch (props.width) {
      case 'small':
        return '275px'
      case 'large':
        return '470px'
    }
  }};
`

interface CardProps {
  primary?: boolean
  light?: boolean
  children: React.ReactNode
  width: 'small' | 'large'
}

export const Card: React.FC<CardProps> = (props) => (<StyledCard {...props}>{props.children}</StyledCard>
)

export default Card
