//Arquivo de configuração do CSS do rodapé da página.
import styled from 'styled-components'
import { breakpoints, cores } from '../../global-styles'

//Configuração CSS do container do rodapé
export const Container = styled.footer`
  background-color: ${cores.bege};
  padding: 40px 0;
  font-size: 14px;
  height: 298px;
`
export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
//Configuração CSS da lista de links.
export const Links = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 80px;
`

//Configuração CSS dos Links.
export const Link = styled.a`
  margin-right: 8px;
  cursor: pointer;
`

//Configuração CSS do copyright.
export const Copyright = styled.p`
  width: 480px;
  font-size: 10px;
  text-align: center;

  a {
    color: ${cores.preto};
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`
