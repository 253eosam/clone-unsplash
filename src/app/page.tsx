"use client"

import { picturesState } from '@/atoms'
import unsplashApi from '@/apis/unsplashApi'
import SearchBox from '@/views/home/SearchBox'
import SearchList from '@/views/home/SearchList'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { IGetPhotos, PictureItem } from '@/models/Picture'

const page: React.FC<any> = () => {
  const [pictures, setPictures] = useRecoilState(picturesState)
  const api = unsplashApi()
  
  useEffect(() => {
    (async () => {
      const result = await api.search
        .getPhotos({ query: "cat", orientation: "landscape" })

      console.log(result);
      
      setPictures(() => (result.response?.results.map(item => (new PictureItem(item as any))) ?? [] ))
    })()
  }, []);
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  

  return (
    <main>
      <SearchBox></SearchBox>
      <SearchList pictures={pictures} />
    </main>
  )
}

export default page
