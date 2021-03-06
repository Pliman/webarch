import * as React from 'react'
import './home-h5.pcss'

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
          <div className="col-xs-12 content">
            Home
          </div>
        </div>
      </div>
    )
  }
}
