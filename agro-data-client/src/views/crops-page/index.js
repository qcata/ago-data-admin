import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Grid, Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import { getCropDetails } from '../../store/actions/cropActions';

// assets
const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.secondary.dark,
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '2em',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: theme.palette.secondary[800],
            borderRadius: '50%',
            top: '-85px',
            right: '-95px',
            [theme.breakpoints.down('xs')]: {
                top: '-105px',
                right: '-140px'
            }
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: theme.palette.secondary[800],
            borderRadius: '50%',
            top: '-125px',
            right: '-15px',
            opacity: 0.5,
            [theme.breakpoints.down('xs')]: {
                top: '-155px',
                right: '-70px'
            }
        }
    },
    content: {
        padding: '20px !important'
    },
    avatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.secondary[800],
        marginTop: '8px'
    },
    avatarRight: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.secondary[200],
        zIndex: 1
    },
    cardHeading: {
        fontSize: '2.125rem',
        fontWeight: 500,
        marginRight: '8px',
        marginTop: '14px',
        marginBottom: '6px'
    },
    subHeading: {
        fontSize: '1rem',
        fontWeight: 500,
        color: theme.palette.secondary[200]
    },
    avatarCircle: {
        cursor: 'pointer',
        ...theme.typography.smallAvatar,
        backgroundColor: theme.palette.secondary[200],
        color: theme.palette.secondary.dark
    },
    circleIcon: {
        transform: 'rotate3d(1, 1, 1, 45deg)'
    },
    menuItem: {
        marginRight: '14px',
        fontSize: '1.25rem'
    }
}));

const CropsPage = ({ lands, getCropDetails }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [landsToDisplay, setLands] = React.useState([]);
    React.useEffect(() => {
        setLands(lands);
    }, [lands]);

    const handleClick = (landId) => {
        getCropDetails(landId).then((response) => {
            console.log(response);
            navigate('/crops/details', { state: { details: response } });
        });
    };

    const renderGrid = () => {
        if (landsToDisplay.length === 0) {
            return <Typography>There are no lands defined.</Typography>;
        }
        return landsToDisplay.map((l) => (
            <MainCard border={false} className={classes.card} contentClass={classes.content} key={l.id}>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Typography className={classes.cardHeading}>{l.name}</Typography>
                            </Grid>
                            <Grid item>
                                <Avatar variant="rounded" className={classes.avatarRight} onClick={() => handleClick(l.id)}>
                                    <SettingsIcon fontSize="inherit" />
                                </Avatar>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </MainCard>
        ));
    };

    return renderGrid();
};

CropsPage.propTypes = {
    userId: PropTypes.number,
    lands: PropTypes.array,
    getCropDetails: PropTypes.func
};

const mapStateToProps = (state) => ({
    lands: state.lands
});

export default connect(mapStateToProps, { getCropDetails })(CropsPage);
