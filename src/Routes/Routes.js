import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Components/00Header/00header';
// PAGINAS
import Pages from '../Pages/Pages';

// ------------------ RETURN ------------------
export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component={Pages} />
            </Switch>

        </BrowserRouter>
    )

}