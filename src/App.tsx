import * as React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {render} from 'react-dom'

import Login from './login/Login'
import Home from './home/Home'
import Profile from './profile/Profile'

import './app.pcss'

// interface AppProps {
//     children
// }
//
// interface AppState {
//     app: object
// }
//
// class App extends React.Component<AppProps, AppState> {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             app: {
//                 platform: 'browser'
//             }
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 {this.props.children}
//             </div>
//         )
//     }
// }

render((
    <Router>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/profile" component={Profile}/>
        </Switch>
    </Router>
), document.getElementById('root'))
