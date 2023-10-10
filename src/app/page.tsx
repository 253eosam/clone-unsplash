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
  const unsplash = unsplashApi()
  
  useEffect(() => {
    (async () => {
      
      const result = await unsplash.photos.getRandom({ count:10 })
      if (!result.response) return
      console.log(result.response);
      const list = Array.isArray(result.response) ? result.response : [result.response] 
      
      setPictures(() => (list.map(item => (new PictureItem(item as any)))))
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
