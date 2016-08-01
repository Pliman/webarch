import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import Login from './login/Login.js';
import Register from './register/Register.js';
import Home from './home/Home.js';

const docReady = require('exports?docReady!../lib/docready/docready');
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

const AppRouter = (props) => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login}/>
      </Route>

      <Route path="login" component={Login}/>
      <Route path="home" component={Home}/>
      <Route path="register" component={Register}/>
    </Router>
  );
};

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
