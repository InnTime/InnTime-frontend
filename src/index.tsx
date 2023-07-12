import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthStore from "./store/auth";
import EventStore from "./store/event";
import CardStore from "./store/card";

const root = ReactDOM.createRoot(document.getElementById('root')!);

export const Context = createContext({
    auth: {} as AuthStore,
    event: {} as EventStore,
    group: {} as CardStore,
    elective: {} as CardStore
})

root.render(
    <React.StrictMode>
        <Context.Provider
            value={{auth: new AuthStore(), event: new EventStore(), group: new CardStore('year'), elective: new CardStore('type')}}>
            <App/>
        </Context.Provider>
    </React.StrictMode>
);