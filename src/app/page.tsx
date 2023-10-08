import SearchBox from '@/components/home/SearchBox'
import SearchList from '@/components/home/SearchList'

const page: React.FC<any> = () => {

  return (
    <main>
      <SearchBox></SearchBox>
      <SearchList></SearchList>
    </main>
  )
}

export default page
