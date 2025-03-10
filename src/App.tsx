import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store';
import Rotas from './routes';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { GlobalCSS } from './styles';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <Cart />
        <div className="container"> {/* Verifique se a classe 'container' está definida no CSS */}
          <Rotas />
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
