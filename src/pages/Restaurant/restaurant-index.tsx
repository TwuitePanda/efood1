import ProductsList from '../../components/ProductsList/productslist-index'
import Banner from '../../components/Banner/banner-index'
import HeaderCart from '../../components/HeaderCart/headerCart-index'
import { useGetFeatureEfoodQuery } from '../../services/api'
import { useParams } from 'react-router-dom'

//Arquivo de estruturação da página Home do site, usando o React Router Dom.
type CardapioParams = {
  id: string
}

const RestaurantPlates = () => {
  const { id } = useParams() as CardapioParams
  const { data: pratosDisponiveis } = useGetFeatureEfoodQuery(id)

  if (!pratosDisponiveis) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <HeaderCart />
      <Banner />
      <ProductsList pratos={pratosDisponiveis.cardapio} />
    </>
  )
}

//Exportações.
export default RestaurantPlates
