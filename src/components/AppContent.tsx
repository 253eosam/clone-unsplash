"use client"

import styled from "styled-components"

const Content = styled.div`
  position: absolute;
  top: 62px;
  right: 0;
  left: 0;
`

const AppContent: React.FC<any> = ({ children }: { children: React.ReactNode }) => {

  return (
    <Content>
      {children}
    </Content>
  )
}

export default AppContent
