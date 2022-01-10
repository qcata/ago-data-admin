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
    token: state.user.token
});

PrivateRoute.propTypes = {
    component: PropTypes.any,
    token: PropTypes.any,
    location: PropTypes.object
};

export default connect(mapStateToProps)(PrivateRoute);
