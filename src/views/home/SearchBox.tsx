'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'

interface Props {
  search: (query: string) => void
}

const SearchBoxWrap = styled.div`
  background-image: url('https://images.unsplash.com/photo-1695632844647-d9252f33100d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D&dpr=1&auto=format%2Ccompress&fit=crop&w=1599&h=594');
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
  margin-bottom: 48px;
`

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  color: #fff;
  width: 66%;
  height: 100%;
  justify-content: center;
`

const H1 = styled.h1`
  font-size: 46px;
  font-weight: 700;
  margin-bottom: 16px;
`

const Paragraph = styled.p`
  font-size: 18px;
  margin: 5px 0;
`

const SearchInput = styled.div`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  margin-top: 24px;
  overflow: hidden;

  input {
    box-sizing: border-box;
    border: 0px;
    padding: 0 30px;
    width: 100%;
    height: 100%;
  }
`

const SearchBox: React.FC<Props> = ({ search }) => {
  const SEARCH_QUERY_KEY = 'q'
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(`${searchParams.get(SEARCH_QUERY_KEY)}`)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(() => e.target.value)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return 
    e.preventDefault()
    
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    current.set(SEARCH_QUERY_KEY, query)
    const currentValue = current.toString()

    const q = currentValue ? `?${currentValue}` : ""
    router.push(`${pathname}${q}`)

    search(query)
  }

  return (
    <SearchBoxWrap>
      <SearchForm>
        <H1>Unsplash</H1>
        <Paragraph>인터넷의 시각 자료 출처입니다.</Paragraph>
        <Paragraph>모든 지역에 있는 크리에이터들의 지원을 받습니다.</Paragraph>
        <SearchInput>
          <input type="text" placeholder='고해상도 이미지 검색' onKeyDown={handleKeyDown} onInput={handleChange} value={query} />
        </SearchInput>
      </SearchForm>
    </SearchBoxWrap>
  )
}

export default SearchBox
