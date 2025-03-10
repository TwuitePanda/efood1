import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Certifique-se de que o arquivo existe com esse nome exato.
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  reportWebVitals();
} else {
  console.error('Elemento com id "root" não encontrado.');
}
