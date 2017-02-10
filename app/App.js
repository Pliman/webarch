import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { render } from 'react-dom';
import Login from './login/Login.js';
import Register from './register/Register.js';
import Home from './home/Home.js';
import Profile from './profile/profile.js';

import './app.less';

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object
  };

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

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="login" component={Login}/>
      <Route path="home" component={Home}/>
      <Route path="profile" component={Profile}/>
      <Route path="register" component={Register}/>
    </Route>
  </Router>
), document.getElementById('root'));
