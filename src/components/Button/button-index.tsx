//Arquivo de criação e configuração dos botões da página.
import { ButtonContainer, ButtonLink } from './button-styles'

//Configuração de tipagem das Propriedades.
type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  disabled?: boolean
}

//Const principal do botão.
const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

//Exportações
export default Button
