import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page from './components/Page'
import pagesMapping from './views'
import './i18n'
import './App.scss'

const App = () => (
  <Router>
    <Switch>
      <Page>
        {Object.entries(pagesMapping).map(([path, Component]) => (
          <Route key={path} path={path} exact>
            <Component />
          </Route>
        ))}
      </Page>
    </Switch>
  </Router>
)

export default App
