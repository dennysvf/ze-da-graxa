import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BaseLayout } from './layouts'
import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog'

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  )
}

export default App
