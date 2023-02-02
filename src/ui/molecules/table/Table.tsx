import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table``

interface TableProps {
  children?: React.ReactNode
}

export const Table: React.FC<TableProps> = (props) => (<StyledTable {...props}>
    {props.children}
</StyledTable>)

export default Table
