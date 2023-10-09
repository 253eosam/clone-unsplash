'use client'

import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import { RecoilRoot, } from 'recoil';
import AppHeader from '@/components/AppHeader'

import { Inter } from 'next/font/google'
import AppContent from '@/components/AppContent'

const inter = Inter({ subsets: ['latin'] })


const layout: React.FC<any> = ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <html>
    <body className={inter.className} style={{ position: 'relative' }}>
      <StyledComponentsRegistry>
      <RecoilRoot>
        <AppHeader/>
        <AppContent>
          {children}
        </AppContent>
        </RecoilRoot>
      </StyledComponentsRegistry>
    </body>
  </html>
  )
}

export default layout
