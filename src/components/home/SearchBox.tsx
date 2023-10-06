'use client'

import styled from 'styled-components'

const SearchBoxWrap = styled.div`
  background-image: url('https://images.unsplash.com/photo-1695632844647-d9252f33100d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D&dpr=1&auto=format%2Ccompress&fit=crop&w=1599&h=594');
  background-size: cover;
  background-repeat: no-repeat;
  border: 5px solid green;
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
`

export default function SearchBox() {
  return (
    <SearchBoxWrap>
      <SearchForm>
        <H1>Unsplash</H1>
        <Paragraph>인터넷의 시각 자료 출처입니다.</Paragraph>
        <Paragraph>모든 지역에 있는 크리에이터들의 지원을 받습니다.</Paragraph>
        <SearchInput></SearchInput>
      </SearchForm>
    </SearchBoxWrap>
  )
}
