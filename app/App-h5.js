import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import Login from './login/Login-h5.js';
import Home from './home/Home-h5.js';
import './app-h5.less';

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
        <h1>App</h1>
        {this.props.children}
      </div>
    );
  }
}


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
    <Route path="login" component={Login} />
    <Route path="home" component={Home} />
  </Route>
);

ReactDOM.render(<Router routes={routes}/>, document.getElementById('h5-root'));
