import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './pages/Home';
import AktualniProjekti from './pages/AktualniProjekti'
import Kontakt from './pages/Kontakt'
import Portal from './pages/Portal'
import Reference from './pages/Reference'
import Tim from './pages/Tim'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

export default class App extends React.Component {

    render() {

        return (
            <Router>
                <Route component={Header} />
                <main>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/aktualniProjekti' component={AktualniProjekti} />
                    <Route path='/kontakt' component={Kontakt} />
                    <Route path='/portal' component={Portal} />
                    <Route path='/reference' component={Reference} />
                    <Route path='/tim' component={Tim} />
                </Switch>
                </main>
                <Route component={Footer} />
            </Router>
        )
    }

}