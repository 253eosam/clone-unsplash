"use client"

import styled from "styled-components";
import SearchListItem from "./SearchListItem"

const PictureList = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1320px;
  padding: 0 20px;
  margin: 0 auto;
`

const PictureListCol = styled.div`
  display: flex;
  flex-direction: column;
`

const SearchList: React.FC<any> = () => {

  const count = 30;

  return  (
    <PictureList>
      <PictureListCol>
      <SearchListItem pHeight={100}/>
      <SearchListItem pHeight={200}/>
      <SearchListItem pHeight={300}/>
      </PictureListCol>
      <PictureListCol>
      <SearchListItem pHeight={400}/>
      <SearchListItem pHeight={500}/>
      <SearchListItem pHeight={600}/>
      </PictureListCol>
      <PictureListCol>
      <SearchListItem pHeight={300}/>
      <SearchListItem pHeight={100}/>
      <SearchListItem pHeight={200}/>
      </PictureListCol>
    </PictureList>
  )
}

export default SearchList

