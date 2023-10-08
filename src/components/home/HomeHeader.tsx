'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Wrap = styled.header`
  border: red 1px solid;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  height: 40px;
  background: #fff;
  padding: 11px 20px;

  display: flex;
  justify-content: space-between;
`
const HomeHeader: React.FC<any> = () => {
  return (
    <Wrap>
      <Link href="/">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Unsplash_wordmark_logo.svg" alt="Logo" width={100} height={32} priority />
      </Link>
      <Link href="/bookmark">
        <p>BookMark</p>
      </Link>
    </Wrap>
  )
}

export default HomeHeader
