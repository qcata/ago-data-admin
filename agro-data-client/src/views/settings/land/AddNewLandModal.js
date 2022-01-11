import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { addLabel } from 'store/actions/landActions';
import { saveLandTile } from '../../../store/actions/landActions';

// material-ui
import { Modal, Box, Typography, FormControl, InputLabel, OutlinedInput, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '15px',
    p: 4
};

const useStyles = makeStyles((theme) => ({
    coordForm: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2em'
    },
    formField: {
        display: 'flex',
        marginTop: '1em',
        justifyContent: 'space-between',
        '& div': {
            width: 250
        }
    },
    submitButton: {
        marginTop: '3em',
        backgroundColor: theme.palette.secondary.main,
        color: '#fff'
    },
    modalHeader: {
        color: theme.palette.secondary.main
    }
}));

const AddNewLandModal = (props) => {
    const { open, handleClose } = props;
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const dto = {
            coord1: e.target.coord1.value,
            coord2: e.target.coord2.value,
            coord3: e.target.coord3.value,
            coord4: e.target.coord4.value,
            name: e.target.name.value
        };
        props.saveLandTile(props.userId, dto);
        props.addTileToGrid(dto);
        handleClose();
        // eslint-disable-next-line no-debugger
    };
    const [formState, setFormState] = React.useState({ name: '', coord1: 0, coord2: 0, coord3: 0, coord4: 0 });

    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h3" component="h2" className={classes.modalHeader}>
                    Add new Land
                </Typography>
                <form noValidate onSubmit={handleSubmit} className={classes.coordForm}>
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Name</InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            defaultValue={formState.name || ''}
                            onChange={(inputField) => setFormState({ ...formState, name: inputField.value })}
                            label="name"
                            fullWidth
                            name="name"
                        />
                    </FormControl>
                    <div className={classes.formField}>
                        <FormControl>
                            <InputLabel htmlFor="component-outlined">Coordinate 1</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                defaultValue={formState.coord1 || ''}
                                onChange={(inputField) => setFormState({ ...formState, coord1: inputField.value })}
                                label="coord1"
                                name="coord1"
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="component-outlined">Coordinate 2</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                defaultValue={formState.coord2 || ''}
                                onChange={(inputField) => setFormState({ ...formState, coord2: inputField.value })}
                                label="coord2"
                                name="coord2"
                            />
                        </FormControl>
                    </div>
                    <div className={classes.formField}>
                        <FormControl>
                            <InputLabel htmlFor="component-outlined">Coordinate 3</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                defaultValue={formState.coord3 || ''}
                                onChange={(inputField) => setFormState({ ...formState, coord3: inputField.value })}
                                label="coord3"
                                name="coord3"
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="component-outlined">Coordinate 4</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                defaultValue={formState.coord4 || ''}
                                onChange={(inputField) => setFormState({ ...formState, coord4: inputField.value })}
                                label="coord4"
                                name="coord4"
                            />
                        </FormControl>
                    </div>
                    <Button variant="contained" type="submit" className={classes.submitButton}>
                        Submit
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

const mapStateToProps = (state) => ({
    userId: state.user.userId
});

AddNewLandModal.propTypes = {
    open: PropTypes.bool,
    userId: PropTypes.number,
    handleClose: PropTypes.func,
    saveLandTile: PropTypes.func,
    addTileToGrid: PropTypes.func
};

export default connect(mapStateToProps, { saveLandTile })(AddNewLandModal);
