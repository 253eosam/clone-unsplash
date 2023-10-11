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
`
const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 20px auto;
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
