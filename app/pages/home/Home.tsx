import * as React from 'react'
import { Link } from 'react-router-dom'
// import './home.less'
import './home.pcss'

interface HomeState {
  test: string
}

export default class Home extends React.Component<{}, HomeState> {
  constructor(props) {
    super(props)
    this.state = {test: 'foo'}
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <ul className="nav nav-pills nav-stacked">
              <li role="presentation" className="active"><Link
                to={'/home'}>Home</Link></li>
              <li role="presentation"><Link to={'/profile'}>Profile</Link></li>
              <li role="presentation"><a href="#">Go Back</a></li>
            </ul>
          </div>
          <div className="col-sm-8 home-content sea">
            Home
          </div>
        </div>
      </div>
    )
  }
}
