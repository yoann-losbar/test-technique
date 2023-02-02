import React from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div`
    display: flex;
    align-items:flex-start;
    align-content:flex-start;
    height: 100vh;
    flex-wrap: wrap;
    padding-top: 20px;
    padding-left: 50px;  
`

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return <StyledLayout {...props}>{props.children}</StyledLayout>
}

export default Layout
