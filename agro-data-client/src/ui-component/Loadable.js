import React, { Suspense } from 'react';
import PrivateRoute from 'routes/PrivateRoute';

// project imports
import Loader from './Loader';

// ===========================|| LOADABLE - LAZY LOADING ||=========================== //

const Loadable = (Component) => (props) =>
    (
        <Suspense fallback={<Loader />}>
            <PrivateRoute component={Component} {...props} />
        </Suspense>
    );

export default Loadable;
