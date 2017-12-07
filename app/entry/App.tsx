import * as React from 'react'
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { render } from 'react-dom'

import store from '../store/configureStore';
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'

import './app.pcss'

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
        {this.props.children}
      </div>
    )
  }
}

render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'))

export default App
