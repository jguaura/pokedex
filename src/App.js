import React, { useState, useEffect } from 'react'

//? Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//? Pages
import HomePage from './pages/HomePage'
import PokeDetailPage from './pages/PokeDetailPage'
import PokemonByTypes from './pages/PokemonByTypes'
//? Nav
import Navbar from './components/NavBar/Navbar'
//? Emotion
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'
import { MainWrapper, Container } from './emotion/components'
//? Themes
import lite from './emotion/themes/lite'
import dark from './emotion/themes/dark'
//! Context
import { MainProvider } from './context/mainContext'

function App() {
  const [darkMode, setDarkMode] = useState(getTheme())
  const dkMode = { darkMode, setDarkMode }

  function getTheme() {
    const theme = localStorage.getItem('dark')
    return JSON.parse(theme) || false
  }

   useEffect(() => {
    localStorage.setItem('dark', darkMode)
  }, [darkMode])
  
  return (
    <Router>
      <MainProvider value={dkMode}>
        <ThemeProvider theme={darkMode ? dark : lite}>  
          <Global styles={css`
            body {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              background-color: ${darkMode ? dark.colors.background : lite.colors.background  };
              overflow-x: hidden;
            }
          `} />
          <MainWrapper className="App">
            <Navbar />
              <Container>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/pokemon/:id" component={PokeDetailPage} />
                  <Route path="/types/:type" component={PokemonByTypes} />
                </Switch>
              </Container>
          </MainWrapper>
        </ThemeProvider>
      </MainProvider>
    </Router>
  )
}

export default App;
