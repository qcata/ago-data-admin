import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, List, ListItem, Grid, ListItemAvatar, ListItemText, Typography, IconButton } from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
import AddNewLandModal from './AddNewLandModal';
// assets
import { IconGrowth, IconPlus } from '@tabler/icons';

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
    }
}));

// ===========================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||=========================== //

const LandSettings = ({ isLoading }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    TTML
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            $100.00
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                    <AddNewLandModal handleClose={handleClose} open={open} />
                </MainCard>
            )}
        </>
    );
};

LandSettings.propTypes = {
    isLoading: PropTypes.bool
};

export default LandSettings;
