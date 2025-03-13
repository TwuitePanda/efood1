//Arquivo de criação e configuração do container de armazenamento dos cards de produto.
import { Restaurante } from '../../pages/Home/home-index'
import Restaurant from '../Restaurant/restaurant-index'
import { Container, List } from './restaurantsList-styles'

//Configuração da tipagem das propriedades.
export type Props = {
  restaurantes: Restaurante[]
}

//Const principal do container de cards.
const RestaurantsList = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Restaurant
            key={restaurante.id}
            id={restaurante.id}
            nota={restaurante.avaliacao}
            description={restaurante.descricao}
            image={restaurante.capa}
            tipo={restaurante.tipo}
            name={restaurante.titulo}
            destaque={restaurante.destacado}
          />
        ))}
      </List>
    </div>
  </Container>
)

//Exportações
export default RestaurantsList
