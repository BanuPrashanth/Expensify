import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => (
    !isAuthenticated ? (
        <Route {...rest} component={(props) => (
            <Component {...props} />
        )}/>
    ) : (
        <Redirect to="/dashboard" />
    )
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
