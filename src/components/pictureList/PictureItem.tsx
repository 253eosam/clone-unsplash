'use client'

import Image from 'next/image'
import styled from 'styled-components'

export interface IPictureItem {
  src: string
  height: number
  alt: string
}

const Wrap = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
`

const PictureItem: React.FC<IPictureItem> = ({ height, alt }) => {
  const WIDTH_SIZE = 410
  const src = `https://placehold.co/`

  return (
    <Wrap style={{ border: '1px solid red' }}>
      <Image loader={({ src, width }) => `${src}${WIDTH_SIZE}`} src={src} width={WIDTH_SIZE} height={height} alt={alt} />
    </Wrap>
  )
}

export default PictureItem
