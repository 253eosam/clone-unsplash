'use client'

import { IPictureItem } from '@/models/Picture'
import Image from 'next/image'
import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
`

const PictureItem: React.FC<IPictureItem> = ({ height, alt, fullUrl, thumbUrl }) => {
  const WIDTH_SIZE = 410

  return (
    <Wrap>
      <Image loader={({ src, width }) => `${src}${WIDTH_SIZE}`} src={thumbUrl} width={WIDTH_SIZE} height={200} alt={alt} />
    </Wrap>
  )
}

export default PictureItem
