import * as React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import App from './App'

import GEPage from './components/GEPage';
import Header from './components/Header';
import ItemIDPage from './components/ItemIDPage'
import './css/styles.css';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <main>
                    <Route exact={true} path="/" component={App} />
                    <Route path="/GEPage" component={GEPage}/>
                    <Route path="/ItemIDPage" component={ItemIDPage}/>
                    <Redirect from='*' to='/' />
                </main>
            </div>
        </BrowserRouter>
    );
}