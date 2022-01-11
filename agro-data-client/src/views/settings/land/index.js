import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, List, ListItem, Grid, ListItemAvatar, ListItemText, Typography, IconButton } from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
import AddNewLandModal from './AddNewLandModal';
// assets
import { IconGrowth, IconPlus } from '@tabler/icons';
// redux
import { getLands } from '../../../store/actions/landActions';

// style constant
const useStyles = makeStyles((theme) => ({
    card: {
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
            borderRadius: '50%',
            top: '-30px',
            right: '-180px'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
            borderRadius: '50%',
            top: '-160px',
            right: '-130px'
        }
    },
    tableActions: {
        padding: '32px !important',
        '& button': {
            color: `${theme.palette.warning.dark}`
        }
    },
    content: {
        padding: '16px !important'
    },
    avatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.warning.dark
    },
    secondary: {
        color: theme.palette.grey[500],
        marginTop: '5px'
    },
    padding: {
        paddingTop: 0,
        paddingBottom: 0
    },
    gridDataRow: {
        width: '19%'
    },
    gridActionRow: {
        width: '5%',
        textAlign: 'end'
    },
    gridRow: {
        marginTop: '1em'
    }
}));

const createLandRow = (row, css) => (
    <Grid container alignItems="center" className={css.gridRow} key={row.id}>
        <Grid item className={css.gridDataRow}>
            <Typography color="inherit">{row.name}</Typography>
        </Grid>
        <Grid item className={css.gridDataRow}>
            <Typography color="inherit">{row.coord1}</Typography>
        </Grid>
        <Grid item className={css.gridDataRow}>
            <Typography color="inherit">{row.coord2}</Typography>
        </Grid>
        <Grid item className={css.gridDataRow}>
            <Typography color="inherit">{row.coord3}</Typography>
        </Grid>
        <Grid item className={css.gridDataRow}>
            <Typography color="inherit">{row.coord4}</Typography>
        </Grid>
        <Grid item className={css.gridActionRow}>
            <Typography color="inherit">Delete</Typography>
        </Grid>
    </Grid>
);

const LandSettings = ({ isLoading, lands, userId, getLands }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [landsArray, setLandsArray] = React.useState(lands);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        getLands(userId);
    }, [userId]);

    const addTileToGrid = (dto) => {
        setLandsArray([...lands, dto]);
    };

    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <MainCard className={classes.card} contentClass={classes.content}>
                    <List className={classes.padding}>
                        <ListItem
                            alignItems="center"
                            disableGutters
                            className={classes.padding}
                            secondaryAction={
                                <div className={classes.tableActions}>
                                    <IconButton edge="end" onClick={handleOpen}>
                                        <IconPlus />
                                    </IconButton>
                                </div>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar variant="rounded" className={classes.avatar}>
                                    <IconGrowth fontSize="inherit" />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                sx={{
                                    mt: 0.45,
                                    mb: 0.45
                                }}
                                className={classes.padding}
                                primary={<Typography variant="h4">Owned Lands</Typography>}
                                secondary={
                                    <Typography variant="subtitle2" className={classes.secondary}>
                                        Lands that are owned by the logged user
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center">
                                            <Grid item className={classes.gridDataRow}>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Land Name
                                                </Typography>
                                            </Grid>
                                            <Grid item className={classes.gridDataRow}>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Coordinate 1
                                                </Typography>
                                            </Grid>
                                            <Grid item className={classes.gridDataRow}>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Coordinate 2
                                                </Typography>
                                            </Grid>
                                            <Grid item className={classes.gridDataRow}>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Coordinate 3
                                                </Typography>
                                            </Grid>
                                            <Grid item className={classes.gridDataRow}>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Coordinate 4
                                                </Typography>
                                            </Grid>

                                            <Grid item className={classes.gridActionRow}>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Actions
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>{landsArray.map((la) => createLandRow(la, classes))}</Grid>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                    <AddNewLandModal handleClose={handleClose} open={open} addTileToGrid={addTileToGrid} />
                </MainCard>
            )}
        </>
    );
};

LandSettings.propTypes = {
    isLoading: PropTypes.bool,
    userId: PropTypes.number,
    lands: PropTypes.array,
    getLands: PropTypes.func
};

const mapStateToProps = (state) => ({
    lands: state.lands,
    userId: state.user.userId
});

export default connect(mapStateToProps, { getLands })(LandSettings);
