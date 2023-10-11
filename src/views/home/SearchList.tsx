"use client"

import styled from "styled-components";
import PictureList from "@/components/pictureList/PictureList";
import { IPictureItem } from "@/models/Picture";
import { shuffle } from "lodash";

interface Props {
  pictures: IPictureItem[]
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1320px;
  padding: 0 20px;
  margin: 0 auto;
`

const SearchList: React.FC<Props> = ({ pictures }) => {

  return  (
    <Wrap>
      <PictureList direction="column" pictures={pictures.slice(0,10)}  />
      <PictureList direction="column" pictures={pictures.slice(10,20)}  />
      <PictureList direction="column" pictures={pictures.slice(20,30)} />
    </Wrap>
  )
}

export default SearchList

