"use client"

import Image from 'next/image'
import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
`

const SearchListItem: React.FC<any> = ({ pHeight }) => {
  const WIDTH_SIZE = 410
  const height = pHeight ?? 410
  const src = `https://placehold.co/`

  return (
    <Wrap>
      <Image
        style={{ border: '1px solid red'}}
        loader={({ src, width }) => `${src}${WIDTH_SIZE}`}
        src={src} 
        width={WIDTH_SIZE} 
        height={height} 
        alt={'test'} 
      />
    </Wrap>
  )
}

export default SearchListItem
