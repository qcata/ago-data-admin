import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const CropDetailsPage = ({ details }) => {
    const location = useLocation();
    const [cropDetails, setDetails] = React.useState({});

    React.useEffect(() => {
        setDetails(location.state.details);
    }, []);

    return <div>{cropDetails.id}</div>;
};

CropDetailsPage.propTypes = {
    details: PropTypes.object
};

export default CropDetailsPage;
