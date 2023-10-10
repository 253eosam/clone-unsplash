'use client'

import './globals.css'
import AppHeader from '@/components/AppHeader'

import { Inter } from 'next/font/google'
import AppContent from '@/components/AppContent'
import AppModal from '@/components/modal/AppModal';
import useModal from '@/hooks/useModal';
import AppContainer from '@/components/AppContainer'

const inter = Inter({ subsets: ['latin'] })


const layout: React.FC<any> = ({
  children,
}: {
  children: React.ReactNode
}) => {


  return (
    <html>
    <body className={inter.className} style={{ position: 'relative' }}>
      <AppContainer>
        <AppModal/>
        <AppHeader/>
        <AppContent>
          {children}
        </AppContent>
      </AppContainer>
    </body>
  </html>
  )
}

export default layout
