import React from 'react'
import styled from 'styled-components'

const StyledRow = styled.div`
  min-height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  padding-top: 10px;
`

const StyledRichRow = styled(StyledRow)`
  height: 50px;
  justify-content: space-between;
`

interface RowProps {
  children?: React.ReactNode
}

export const Row: React.FC<RowProps> = (props) => (<StyledRow {...props}>
    {props.children}
</StyledRow>)

export const RichRow: React.FC<RowProps> = (props) => (<StyledRichRow {...props}>
    {props.children}
</StyledRichRow>)

export default Row
