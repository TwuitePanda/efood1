//Arquivo de criação e configuração dos cards de produtos da página.
import { useState } from 'react'
import { ButtonContainer } from '../Button/button-styles'
import {
  Card,
  CartButton,
  Close,
  Descricao,
  FDescription,
  FoodPhoto,
  FTitle,
  Modal,
  ModalContainer,
  ModalContent,
  Titulo
} from './product-styles'
import closeIcon from '../../assets/images/icones/fechar -icon.png'
import { add, open, CartItem } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'

//Configuração de tipagem das Propriedades.
type Props = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

//Const principal do card.
const Product = ({ nome, descricao, foto, porcao, preco }: Props) => {
  const [modalAberto, SetModalAberto] = useState(false)
  const dispatch = useDispatch()

  const items = useSelector(
    (state: { cart: { items: CartItem[] } }) => state.cart.items
  )

  const addToCart = () => {
    const item: CartItem = {
      id: Date.now(), // Gere um ID único ou modifique conforme necessário
      foto,
      descricao,
      preco,
      nome,
      porcao
    }

    const existingItem = items.find((cartItem) => cartItem.nome === item.nome)

    if (!existingItem) {
      dispatch(add(item))
      dispatch(open())
      SetModalAberto(false)
    } else {
      alert('O prato já está no carrinho!')
    }
  }

  //função para reduzir textos.
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card>
        <img src={foto} alt={nome} />
        <Titulo>{nome}</Titulo>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <ButtonContainer onClick={() => SetModalAberto(true)}>
          Adicionar ao carrinho
        </ButtonContainer>
      </Card>
      {/* MODAL */}
      <Modal className={modalAberto ? 'visivel' : ' '}>
        <ModalContent>
          <FoodPhoto src={foto} alt={nome} />
          <ModalContainer>
            <FTitle>{nome}</FTitle>
            <FDescription>
              {descricao}
              <p>Serve: {porcao}</p>
            </FDescription>
            <CartButton onClick={addToCart}>
              Adicionar ao carrinho - ${formataPreco(preco)}
            </CartButton>
          </ModalContainer>
          <Close
            onClick={() => SetModalAberto(false)}
            src={closeIcon}
            alt="fechar"
          />
        </ModalContent>
        <div onClick={() => SetModalAberto(false)} className="overlay"></div>
      </Modal>
    </>
  )
}

//Exportações
export default Product
