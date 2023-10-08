"use client"

import styled from "styled-components";
import PictureList from "@/components/pictureList/PictureList";
import { IPictureItem } from "../../components/pictureList/PictureItem";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1320px;
  padding: 0 20px;
  margin: 0 auto;
`

const SearchList: React.FC<any> = () => {

  const pictures: IPictureItem[] = [
    { src: 'https://placehold.co/', height: 410, alt: 'https://placehold.co/' },
    { src: 'https://placehold.co/', height: 310, alt: 'https://placehold.co/' },
    { src: 'https://placehold.co/', height: 210, alt: 'https://placehold.co/' },
  ]

  return  (
    <Wrap>
      <PictureList direction="column" pictures={pictures}  />
      <PictureList direction="column" pictures={[...pictures].reverse()}  />
      <PictureList direction="column" pictures={pictures} />
    </Wrap>
  )
}

export default SearchList

