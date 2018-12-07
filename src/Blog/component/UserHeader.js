import React, {Component} from 'react';
import {connect} from "react-redux";
import {blogAction} from "../actions";
import * as _ from "lodash";
import * as PropTypes from "prop-types";

class UserHeader extends Component {
    static propTypes = {
        userId: PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //this.props.fetchUser(this.props.userId);
    }

    render() {
        if (!this.props.user) {
            return 'Loading...'
        }

        return <div>
            {this.props.user.name}
        </div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: _.find(state.users, {id: ownProps.userId})
    }
}

export default connect(mapStateToProps, {fetchUser: blogAction.fetchUser})(UserHeader);