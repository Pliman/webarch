import * as React from 'react'
import './profile-h5.pcss';

interface ProfileState {
  test: string
}

export default class Profile extends React.Component<{}, ProfileState> {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 content">
            Profile
          </div>
        </div>
      </div>
    );
  }
}
