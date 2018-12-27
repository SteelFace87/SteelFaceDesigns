import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: null,
            };
        }

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    authUser
                        ? this.setState({ authUser:"auth" })
                        : this.setState({ authUser: null });
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }


        render() {
            const auth = this.state.authUser;
            console.log('here is auth');
            console.log(auth);
            return (
                <AuthUserContext.Provider value={auth}>
                    <Component auth={auth} />
                </AuthUserContext.Provider>
            );
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;