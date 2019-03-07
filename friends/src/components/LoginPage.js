import React, {Component} from 'react'
import {connect} from 'react-redux'

import {login} from '../actions'

 class LoginPage extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLogin = e  => {
        e.preventDefault()
        this.props.login(this.state.username, this.state.password)
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    render(){
        return (
            <form onSubmit = {this.handleLogin}>
                <input name = 'username' type="text" value = {this.state.username} onChange = {this.handleChange}/>
                <input name = 'password' type="password" value = {this.state.password} onChange = {this.handleChange}/>
                <input type = 'submit' value = 'Login'/>
            </form>
        )
    }
}

export default connect(null, {login})(LoginPage)