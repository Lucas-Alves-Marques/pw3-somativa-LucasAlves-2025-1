import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Container from './components/layout/Container'

/* IMPORTS DOS COMPONENTES DE PÁGINAS */
import Home from './components/pages/Home/Home.jsx'
import CreateBook from './components/pages/CreateBook/CreateBook.jsx'
import ListBook from './Components/Pages/ListBook/ListBook.jsx'
import DetailBook from './Components/Pages/Details/DetailBook.jsx'
import UpdateBooks from './Components/Pages/UpdateBook/UpdateBooks.jsx'
import DeleteBook from './Components/Pages/DeleteBook/DeleteBook.jsx'

/* IMPORTAÇÃO DO NAVBAR */
import NavBar from '../src/Components/Layout/NavBar.jsx'


function App() {

  return (    
      <div>

        <BrowserRouter>

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>

                <Route path='/' element={<Home />} />
                <Route path='/newBook' element={<CreateBook />} />
                <Route path='/listBook' element={<ListBook />} />
                <Route path='/details/:cod_livro' element={<DetailBook />} />
                <Route path='/updateBook/:cod_livro' element={<UpdateBooks />} />
                <Route path='/deleteBook/:cod_livro' element={<DeleteBook />} />

              </Route>

            </Routes>

          </Container>

        </BrowserRouter>

      </div>
  )
}

export default App
