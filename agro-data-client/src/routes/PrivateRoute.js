import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthorizationHeader } from '../configs/client';

const PrivateRoute = ({ component: Component, token, ...props }) => {
    if (!token) {
        return (
            <Navigate
                to={{
                    pathname: '/login'
                }}
            />
        );
    }
    setAuthorizationHeader(token);
    return <Component {...props} />;
};

const mapStateToProps = (state) => ({
    token: state.user.token,
    userId: state.user.id,
    isAdmin: state.user.isAdmin,
    loginResult: state.user.loginResult
});

PrivateRoute.propTypes = {
    component: PropTypes.any,
    token: PropTypes.string,
    userId: PropTypes.number,
    location: PropTypes.object
};

export default connect(mapStateToProps)(PrivateRoute);
