import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import Login from './login/Login-h5.js';
import Home from './home/Home-h5.js';
import './app-h5.less';



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
        <h1>App</h1>
        {this.props.children}
      </div>
    );
  }
}


const AppRouter = (props) => {
  return(
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="login" component={Login} />
        <Route path="home" component={Home} />
      </Route>
    </Router>
  )
}


ReactDOM.render(<AppRouter/>, document.getElementById('h5-root'));
