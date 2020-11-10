import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

class Router extends Component {
    constructor() {
        super()
        this.state = {
            pageLoading: true
        }
    }
    componentDidMount() {
        this.setState({ pageLoading: false })
    }
    render() {
        return (
            <main>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={(props) => (
                            <Home {...props}/>
                        )}
                    />
                    <Route
                        path="/profile"
                        component={() => (
                            <Profile />
                        )}
                    />
                </Switch>
            </main>
        )
    }

}

export default Router 