"use client"

import styled from "styled-components"
import PictureItem from "./PictureItem"
import { IPictureItem } from "@/models/Picture"

interface Props {
  direction?: 'row' | 'column'
  pictures?: IPictureItem[]
  spaceSize?: number
  style?: any
}

const Wrap = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`
const PictureItemWrap = styled.div`
  &:last-child {
    margin-bottom: 0;
  }
`

const PictureList: React.FC<Props> = ({ direction = 'row', pictures, spaceSize = 5, style }) => {

  return (
    <Wrap style={{ ...style, flexDirection: direction }}>
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
