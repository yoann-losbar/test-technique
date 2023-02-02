import React from 'react'
import styled from 'styled-components'

const StyledFlexBoxSpace = styled.div`
    display: flex;
    width: ${(props: FlexBoxSpaceProps) => props.width}px;
    height: ${(props: FlexBoxSpaceProps) => props.height}px;
`

interface FlexBoxSpaceProps {
  children?: React.ReactNode
  width?: number
  height?: number
}

export const FlexboxSpace: React.FC<FlexBoxSpaceProps> = (props) => {
  return <StyledFlexBoxSpace {...props}>
    </StyledFlexBoxSpace>
}

export default FlexboxSpace
