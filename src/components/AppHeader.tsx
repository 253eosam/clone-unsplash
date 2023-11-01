'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'

const Wrap = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  height: 40px;
  background: #fff;
  padding: 11px 20px;

  display: flex;
  justify-content: space-between;

  .link {
    text-decoration: underline; 
  }
`

const GoToBookMark = styled.p`
  line-height: 40px;
  font-size: 20px;
`

const HomeHeader: React.FC<any> = () => {
  const pathname = usePathname()

  return (
    <Wrap>
      <Link href="/" >
        <Image src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Unsplash_wordmark_logo.svg" alt="Logo" width={100} height={32}  />
      </Link>
      {
        pathname === '/' && (
          <Link className='link' href="/bookmark">
            <GoToBookMark>Go to bookmark ★</GoToBookMark>
          </Link>
        )
      }
    </Wrap>
  )
}

export default HomeHeader
