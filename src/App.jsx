
import { useState } from 'react'
import BlogPosts from './BlogPosts'
import BlogPage from './BlogPage';

function App() {

  const [pagina,setPagina]= useState("banner");

  return (
    <>
    {pagina === 'banner' ?(
      <BlogPosts irParaPagina={() => setPagina('blog')} />)
      :
      <BlogPage />
      }

    </>
  )
}

export default App
