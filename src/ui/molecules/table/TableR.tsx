import React from 'react'
import styled from 'styled-components'

const StyledThead = styled.tr``

interface TableRProps {
  children?: React.ReactNode
}

export const Tr: React.FC<TableRProps> = (props) => (<StyledThead {...props}>
    {props.children}
</StyledThead>)

export default Tr
