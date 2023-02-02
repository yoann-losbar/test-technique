import React from 'react'
import styled from 'styled-components'

const StyledThead = styled.th`
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  ${(props: TableHProps) => (props.selectable ?? false) && `
      &:hover {
    background-color: #fafafa;
    cursor: pointer;
  }
  `}
  user-select: none;
`

interface TableHProps {
  children?: React.ReactNode
  selectable?: boolean
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void
}

export const Th: React.FC<TableHProps> = (props) => (<StyledThead {...props}>
    {props.children}
</StyledThead>)

export default Th
