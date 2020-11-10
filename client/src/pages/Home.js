import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import '../styles/Home.css'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            formError: false
        }
    }
    // handles the change in fields
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value, formError: false })
    }
    // handles submission
    handleSubmit = () => { }

    render() {
        const { email, password } = this.state
        return (
            <div className="signin flex-col">
                <h1>Welcome to BakStabber</h1>
                <h2>A Place To Let It All Out</h2>
                <form className="flex-col" onSubmit={this.handleSubmit}>
                    <TextInput
                        placeholder="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <TextInput
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <button className="buttons">Sign In</button>
                    <button className="buttons">Sign Up</button>
                </form>
            </div>
        )
    }
}
