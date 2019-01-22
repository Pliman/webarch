import * as React from 'react'
import {Link} from 'react-router-dom'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

import './HomeService'
import './home.pcss'

interface HomeState {
    test: string
}

interface HomeProps {
}

@observer
class Home extends React.Component<HomeProps, HomeState> {
    constructor(props) {
        super(props)
        this.state = {test: 'foo'}
    }

    @observable user

    componentDidMount() {
        fetch('/users/current')
            .then(res => res.json())
            .then(data => {
                this.user = data.data
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        <ul className="nav nav-pills nav-stacked">
                            <li role="presentation" className="active"><Link
                                to={'/home'}>Home</Link></li>
                            <li role="presentation"><Link
                                to={'/profile'}>Profile</Link></li>
                            <li role="presentation"><a href="#">Go Back</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-8 home-content sea">
                        {this.user && this.user.name} Home
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
