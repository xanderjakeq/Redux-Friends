import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getFriends} from '../actions'

class FriendsPage extends Component{
    componentDidMount(){
        if(this.props.friends.length === 0) {
            this.props.getFriends()
        }
    }
    render(){
        return (
            <div>
                {this.props.friends && this.props.friends.map(friend => {
                    return (
                        <div key = {friend.id}>
                            <h1>{friend.name}</h1>
                            <p>{friend.email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        friends: state.friends
    }
}

export default connect(mapStateToProps,{getFriends})(FriendsPage)