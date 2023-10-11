'use client'

import useBookmark from '@/hooks/useBookmark'
import { IPictureItem } from '@/models/Picture'
import Image from 'next/legacy/image'
import { useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
`

const Bookmark = styled.button`
  visibility: hidden;
  position: absolute;
  bottom: 10px;
  right: 10px;

  &.show {
      &::after {
      visibility: visible;
      font-size: 30px;
      padding: 3px;
      content: '❤️';
    }
  }

  &::after {
      visibility: visible;
      font-size: 30px;
      padding: 3px;
      content: '🤍';
    }
`

const PictureItem: React.FC<IPictureItem> = ({ id, height, width, alt, fullUrl, thumbUrl }) => {
  const WIDTH_SIZE = 410
  const h = WIDTH_SIZE * height / width
  const { hasBookmark, switchBookmark } = useBookmark()
  const [isBookmark , setIsBookmark] = useState(hasBookmark(id) ? 'show' : 'hidden')
  const handleButtonClick = () => {
    setIsBookmark( () => switchBookmark(id))
  }
  return (
    <Wrap>
      <Image  
        src={thumbUrl} 
        width={WIDTH_SIZE}
        height={h}
        alt={alt}
      />
      <Bookmark onClick={handleButtonClick} className={isBookmark} >Bookmark</Bookmark>
    </Wrap>
  )
}

export default PictureItem
