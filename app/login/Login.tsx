import * as React from 'react'
import './login.pcss'

interface LoginProps {
  router
  history
}

interface LoginState {
  test: string
}

export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props) {
    super(props)
    this.state = {
      test: 'foo'
    }
  }

  async login(event) {
    event.preventDefault()

    this.props.history.push('/home')
  }

  render() {
    return (
      <div className="container">
        <form method="post" onSubmit={this.login.bind(this)}>
          <div className="form-group">
            <label htmlFor="username">User name:</label>
            <input type="text" className="form-control" id="username"
                   placeholder="user name"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" id="password"
                   placeholder="Password"/>
          </div>
          <input type="submit" className="btn btn-default" value="submit" />
        </form>
      </div>
    )
  }
}
