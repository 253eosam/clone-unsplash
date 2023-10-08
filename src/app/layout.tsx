import './globals.css'
import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import AppHeader from '@/components/AppHeader'

import { Inter } from 'next/font/google'
import AppContent from '@/components/AppContent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '아름다운 무료 이미지 및 사진 | Unsplash',
  description: "어떤 프로젝트를 위해서든 다운로드 및 사용할 수 있는 아름다운 무료 이미지 및 사진입니다. 어떤 로열티 프리 또는 스톡 사진보다 좋습니다.",
}

const layout: React.FC<any> = ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <html>
    <body className={inter.className} style={{ position: 'relative' }}>
      <StyledComponentsRegistry>
        <AppHeader/>
        <AppContent>
          {children}
        </AppContent>
      </StyledComponentsRegistry>
    </body>
  </html>
  )
}

export default layout
