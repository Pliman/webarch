import * as React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { render } from 'react-dom'

import Login from '../pages/login/Login-h5'
import Home from '../pages/home/Home-h5'

import './app-h5.pcss'

interface AppProps {
  children
}

interface AppState {
  app: object
}

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props)

    this.state = {
      app: {
        platform: 'browser'
      }
    }
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        {this.props.children}
      </div>
    )
  }
}

render((
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </Router>),
  document.getElementById('h5-root'))
