import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categorys from './pages/Categorys'
import Product from './pages/Product'

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categorys />} />
    <Route path="/produto/:id" element={<Product />} />
  </Routes>
)

export default RoutesConfig
