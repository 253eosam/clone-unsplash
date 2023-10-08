import SearchBox from '@/views/home/SearchBox'
import SearchList from '@/views/home/SearchList'

const page: React.FC<any> = () => {

  return (
    <main>
      <SearchBox></SearchBox>
      <SearchList></SearchList>
    </main>
  )
}

export default page
