"use client"

import { Suspense } from "react"
import styled from "styled-components"
import AppLoading from "./AppLoading"

const Content = styled.div`
  position: absolute;
  top: 62px;
  right: 0;
  left: 0;
`

const AppContent: React.FC<any> = ({ children }: { children: React.ReactNode }) => {

  return (
    <Content>
        <Suspense fallback={<AppLoading />}>
      {children}
      </Suspense>
    </Content>
  )
}

export default AppContent
