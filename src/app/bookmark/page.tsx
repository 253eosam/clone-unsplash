'use client'

import unsplashApi from '@/apis/unsplashApi'
import PictureList from '@/components/pictureList/PictureList'
import useBookmark from '@/hooks/useBookmark'
import { PictureItem } from '@/models/Picture'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Content = styled.main`
  display: flex;
  justify-content: center;
  padding: 3rem 10rem ;
`
const H1 = styled.h1`
  font-size: 5rem;
  text-align: center;
  margin: 20px auto;
  color: #ffffff;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: black;
`

const page: React.FC<any> = () => {
  const [pictures, setPictures] = useState([])
  const { getBookmarks } = useBookmark()
  const unsplash = unsplashApi()

  useEffect(() => {
    Promise.allSettled(
      getBookmarks().map(async (photoId) => {
        const result = await unsplash.photos.get({ photoId })
        if (!result.response) return
        const value = result.response
        return value
      })
    ).then((results) => {
      const list = results.filter((result) => result.status === 'fulfilled').map((result) => (result as any).value)
      setPictures(() => list.map((item) => new PictureItem({ ...item, isForceHeight: true })) as any)
    })
  }, [])

  return (
    <main>
      <H1>Book Mark Page</H1>
      <Content>
        <PictureList direction="row" pictures={pictures} style={{ width: '100%', justifyContent: 'space-around', flexWrap: 'wrap' }} />
      </Content>
    </main>
  )
}

export default page
