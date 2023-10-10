"use client"

import { picturesState } from '@/atoms'
import unsplashApi from '@/apis/unsplashApi'
import SearchBox from '@/views/home/SearchBox'
import SearchList from '@/views/home/SearchList'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { IGetPhotos, PictureItem } from '@/models/Picture'
import { useSearchParams } from 'next/navigation'

const page: React.FC<any> = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') ?? ''

  const [pictures, setPictures] = useRecoilState(picturesState)
  const unsplash = unsplashApi()

  const search = (query: string) => {
    const fetchRandom = async () => {
      const result = await unsplash.photos.getRandom({ count:10 })
      if (!result.response) return
      const list = Array.isArray(result.response) ? result.response : [result.response] 
      
      setPictures(() => (list.map(item => (new PictureItem(item as any)))))
    }
    
    const fetchByQuery = async (query: string) => {
      const result = await unsplash.search.getPhotos({ query: query })
      if (!result.response) return
      const list = result.response.results
      
      setPictures(() => (list.map(item => (new PictureItem(item as any)))))
    }

    return query ? fetchByQuery(query) : fetchRandom()
  }


  useEffect(() => {
    search(query)
  }, []);

  return (
    <main>
      <SearchBox search={search}></SearchBox>
      <SearchList pictures={pictures} />
    </main>
  )
}

export default page
