import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

class UserHeader extends Component {
    componentDidMount () {
        this.props.fetchUser(this.props.userID);
    }
    render () {
        console.log("this is props: ", this.props);
        const { user } = this.props;

        if(!user){
            return <div>Loading...</div>;
        }

        return (
            <div>{user.name}</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userID) }
}

export default connect(mapStateToProps, {
    fetchUser })(UserHeader);