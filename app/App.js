import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import Login from './login/Login.js';
import Register from './register/Register.js';
import Home from './home/Home.js';

import './app.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      app: {
        platform: 'browser'
      }
    };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

// 拆分路由，防止hot-reload时报错：You cannot change <Router routes>; it will be ignored
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
    <Route path="login" component={Login}/>
    <Route path="home" component={Home}/>
    <Route path="register" component={Register}/>
  </Route>
);

class AppRouter extends React.Component {
  render () {
    return <Router routes={routes}></Router>
  }
}

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
