import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import LandingPage from './Layout'

class Router extends Component {
    render() {
        <main>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={() => (
                        <LandingPage />
                    )}
                />
            </Switch>
        </main>
    }
}

export default withRouter(Router)