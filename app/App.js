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
      aaa
        {this.props.children}
      </div>
    );
  }
}

const AppRouter = (props) => {
  return (
    <Router>
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
