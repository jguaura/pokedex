import React from 'react';
import './App.css';

//? Router
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
//? Pages
import HomePage from './pages/HomePage'
import PokeDetailPage from './pages/PokeDetailPage'
import PokemonByTypes from './pages/PokemonByTypes'
//? Emotion
import { MainWrapper, Container } from './emotion/components'

function App() {
  return (
    <Router>
      <MainWrapper>
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/pokemon/:id" component={PokeDetailPage} />
            <Route path="/types/:type" component={PokemonByTypes} />
          </Switch>
        </Container>
      </MainWrapper>
    </Router>
  );
}

export default App;
