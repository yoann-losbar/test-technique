import React from 'react'
import styled from 'styled-components'

const StyledListItem = styled.li`
  width: 100%;
  padding: 10px;
  height: 15px;
  background: white;
  border-radius: 5px;

  > span {
    user-select: none;
  }

  &:hover {
    background: #fafafa;
    cursor: pointer;

    > span {
      color: black;
    }
  }


`

interface ListItemProps {
  children?: React.ReactNode
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void
}

export const ListItem: React.FC<ListItemProps> = (props) => (<StyledListItem {...props}>
    {props.children}
</StyledListItem>)

export default ListItem
