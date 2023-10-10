'use client'

import { IPictureItem } from '@/models/Picture'
import Image from 'next/legacy/image'
import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
`

const PictureItem: React.FC<IPictureItem> = ({ height, width, alt, fullUrl, thumbUrl }) => {
  const WIDTH_SIZE = 410
  const h = WIDTH_SIZE * height / width
  return (
    <Wrap>
      <Image  
        src={thumbUrl} 
        width={WIDTH_SIZE}
        height={h}
        alt={alt}
      />
    </Wrap>
  )
}

export default PictureItem
