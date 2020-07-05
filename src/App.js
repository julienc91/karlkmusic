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
        {pagesMapping.map(({ Component, name, url }) => (
          <Route key={name} path={url} exact>
            <Component />
          </Route>
        ))}
      </Page>
    </Switch>
  </Router>
)

export default App
