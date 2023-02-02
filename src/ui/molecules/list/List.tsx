import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
    width: 113px;
`

interface ListProps {
  children?: React.ReactNode
}

export const List: React.FC<ListProps> = (props) => (<StyledList {...props}>
    {props.children}
</StyledList>)

export default List
