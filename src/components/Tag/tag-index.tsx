//Arquivo de criação e configuração das tags da página.
import { TagContainer } from './tag-styles'

//Configuração de tipagem das Propriedades.
export type Props = {
  children: string
}

//Const principal da tag.
const Tag = ({ children }: Props) => <TagContainer>{children}</TagContainer>

//Exportações
export default Tag
