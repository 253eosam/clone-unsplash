"use client"
import styled from "styled-components";
import PictureList from "@/components/pictureList/PictureList";
import { IPictureItem } from "@/models/Picture";
import React from "react";

interface Props {
  pictures: IPictureItem[]
}

const Wrap = styled.div`
  max-width: 1320px;
  padding: 0 20px;
  margin: 0 auto;
`

const SearchList: React.FC<Props> = ({ pictures }) => {

  
  return  (
    <Wrap>
        <PictureList pictures={pictures}  />
    </Wrap>
  )
}

export default SearchList

