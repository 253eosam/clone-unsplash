"use client"

import styled from "styled-components";
import PictureList from "@/components/pictureList/PictureList";
import { IPictureItem } from "@/models/Picture";

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
      <PictureList direction="column" pictures={pictures}  />
      <PictureList direction="column" pictures={[...pictures].reverse()}  />
      <PictureList direction="column" pictures={pictures} />
    </Wrap>
  )
}

export default SearchList

