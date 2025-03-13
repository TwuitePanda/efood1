// Arquivo para as configurações globais do projeto.
import { createGlobalStyle } from 'styled-components'

//Constante para as variáveis de cores.
export const cores = {
  branco: '#eee',
  preto: '#111',
  cinza: '#333',
  cinzaClaro: '#a3a3a3',
  verde: '#10ac84',
  bege: '#FFEBD9',
  RosaFundo: '#FFF8F2',
  RosaFundoClaro: '#FFFFFF',
  rosa: ' #E66767',
  vermelho: 'red'
}

//Config de Breakpoints
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px'
}

//Constante do css clobal.
export const GlobalCss = createGlobalStyle`

  //Config. de reset do projeto.
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;

    body {
      background-color: ${cores.RosaFundo};
      color: ${cores.rosa};
    }
  }

  //Configuração do container principal do projeto.
  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;

    //Ajustando responsivo

    @media (max-width: ${breakpoints.desktop}) {
  .container {
    max-width: 1024px;
    padding: 0 16px; /* ajuste de padding para telas menores */
  }
}

@media (max-width: ${breakpoints.tablet}) {
  .container {
    max-width: 768px;
    padding: 0 12px;
  }
}

@media (max-width: ${breakpoints.mobile}) {
  .container {
    max-width: 480px;
    padding: 0 8px;
  }
}
  }
`
