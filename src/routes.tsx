import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home-index'
import RestaurantPlates from './pages/Restaurant/restaurant-index'
import Checkout from './pages/Checkout/checkout-index'

//Configuração das rotas de navegação com Router-dom
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<RestaurantPlates />} />
    <Route
      path="/checkout"
      element={
        <Checkout
          onClose={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      }
    />
  </Routes>
)

export default Rotas
