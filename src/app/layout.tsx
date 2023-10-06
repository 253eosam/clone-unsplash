import './globals.css'
import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import HomeHeader from '@/components/home/HomeHeader'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '아름다운 무료 이미지 및 사진 | Unsplash',
  description: "어떤 프로젝트를 위해서든 다운로드 및 사용할 수 있는 아름다운 무료 이미지 및 사진입니다. 어떤 로열티 프리 또는 스톡 사진보다 좋습니다.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <HomeHeader/>
          {/* TODO: create container component and add top margin as much as header height   */}
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}