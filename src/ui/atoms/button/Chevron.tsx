import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
  border: none;
  background: none;
  cursor: pointer;
  user-select: none;
`

interface ChevronProps {
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

export const Chevron: React.FC<ChevronProps> = (props) => {
  return <StyledButton {...props}>
        {props.children}
    </StyledButton>
}

export default Chevron
