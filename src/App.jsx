
import { useState } from 'react'
import BlogList from './BlogList'
import BlogPage from './BlogPage';

function App() {

  const [pagina,setPagina]= useState("banner");

  return (
    <>
    {pagina === 'banner' ?(
      <BlogList irParaPagina={() => setPagina('blog')} />)
      :
      <BlogPage />
      }

    </>
  )
}

export default App
