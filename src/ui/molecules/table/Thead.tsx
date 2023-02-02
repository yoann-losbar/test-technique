import React from 'react'
import styled from 'styled-components'

const StyledThead = styled.thead``

interface TheadProps {
  children?: React.ReactNode
}

export const Thead: React.FC<TheadProps> = (props) => (<StyledThead {...props}>
    {props.children}
</StyledThead>)

export default Thead
