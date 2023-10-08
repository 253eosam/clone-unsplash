"use client"

import styled from "styled-components"
import PictureItem, { IPictureItem } from "./PictureItem"

interface Props {
  direction?: 'row' | 'column'
  pictures?: IPictureItem[]
  spaceSize?: number
}

const Wrap = styled.div`
  display: flex;
`
const PictureItemWrap = styled.div`
  &:last-child {
    margin-bottom: 0;
  }
`

const PictureList: React.FC<Props> = ({ direction = 'row', pictures, spaceSize = 5 }) => {

  return (
    <Wrap style={{ flexDirection: direction }}>
        { 
          pictures &&
          pictures.map((picture, idx) => (
            <PictureItemWrap 
              key={`${picture.alt}_${idx}`} 
              style={{ marginBottom: spaceSize }}
            >
              <PictureItem {...picture} />
            </PictureItemWrap>
          ))
        }
    </Wrap>
  )
}

export default PictureList
