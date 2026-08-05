import React from 'react';
import ReactDOM from 'react-dom/client';
import Deck from './Deck.jsx';
import './deck.css';

ReactDOM.createRoot(document.getElementById('deck-root')).render(
  <React.StrictMode>
    <Deck />
  </React.StrictMode>,
);
