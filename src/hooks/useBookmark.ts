const useBookmark = () => {
  const BOOKMARK_KEY = 'bookmarks'

  const getBookmarks = (): string[] => JSON.parse(localStorage.getItem(BOOKMARK_KEY) ?? '[]')
  const switchBookmark = (id: string): 'show' | 'hidden' => {
    const bookmarks = getBookmarks()

    const add = (id: string, list: string[]) => {
      list.push(id)
      return 'show'
    }
    const remove = (id: string, list: string[]) => {
      list.splice(bookmarks.indexOf(id), 1)
      return 'hidden'
    }
    
    const result = (bookmarks.includes(id) ? remove(id, bookmarks) : add(id, bookmarks)) as 'show' | 'hidden'
    localStorage.setItem(
      BOOKMARK_KEY,
      JSON.stringify(bookmarks)
    )
    return result
  }

  return {
    hasBookmark(id: string) { return getBookmarks().includes(id) },
    getBookmarks,
    switchBookmark,
  }
}

export default useBookmark