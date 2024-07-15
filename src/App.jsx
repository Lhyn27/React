import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { MyPlaylist } from "./components/MyPlaylist"
/**
* Nuestro componente App sera el principal y el que sera renderizado en index.js
*/
export const App = () => <MyPlaylist/>;

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <StrictMode>
        <App />
    </StrictMode>);