import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { action } from '../utils/redux-decorators'

import './HomeService'
import './home.pcss'

interface HomeState {
  test: string
}

interface HomeProps {
  user
  dispatch
  router
}

class Home extends React.Component<HomeProps, HomeState> {
  @action()
  static GET_CURRENT_USER

  constructor(props) {
    super(props)
    this.state = {test: 'foo'}
  }

  componentDidMount() {
    this.props.dispatch({
      type: Home.GET_CURRENT_USER.ACTION
    })

    setTimeout(() => {
      console.log(this.props)
    }, 2000)
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
            {this.props.user && this.props.user.name} Home
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
