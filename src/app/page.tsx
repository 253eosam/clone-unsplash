"use client"

import styles from './page.module.css'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

export default function Home() {
  return (
    <main className={styles.main}>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    </main>
  )
}
