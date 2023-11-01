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
      cursor: pointer;
      visibility: visible;
      font-size: 30px;
      padding: 3px;
      text-shadow: 0 0 10px white;
      content: '★';
    }
  }

  &::after {
      cursor: pointer;
      visibility: visible;
      font-size: 30px;
      padding: 3px;
      color: white;
      text-shadow: 0 0 10px white;
      content: '☆';
    }
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #9f9f9f14;

  .content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    min-width: 5%;
    min-height: 5%;
    border-radius: 10px;
  }
`

const PictureItem: React.FC<IPictureItem> = ({ id, height, width, alt, fullUrl, thumbUrl, isForceHeight }) => {
  const FIXED_SIZE = 400
  const { hasBookmark, switchBookmark } = useBookmark()
  const [isBookmark , setIsBookmark] = useState(hasBookmark(id) ? 'show' : 'hidden')
  const handleButtonClick = () => {
    setIsBookmark(() => switchBookmark(id))
  }
  const [isOpenModal, setIsOpenModal] = useState(false)

  const showModal = () => {
    setIsOpenModal(true)
    console.log("[🚀 253eosam] |  file: PictureItem.tsx:53 |  showModal |  showModal:", isOpenModal)
  }


  return (
    <Wrap>
      <Modal>
        <div className="content">
          hellowrold
        </div>
      </Modal>
      <Image  
        src={thumbUrl} 
        width={FIXED_SIZE}
        height={FIXED_SIZE / 1.5}
        alt={alt}
        placeholder="blur"
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
        onClick={showModal}
      />
      <Bookmark onClick={handleButtonClick} className={isBookmark} >Bookmark</Bookmark>
    </Wrap>
  )
}

export default PictureItem
