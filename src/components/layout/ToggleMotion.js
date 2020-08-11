import React, { useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        alignSelf: "flex-start",
        marginTop: theme.spacing(20),
        marginLeft: theme.spacing(1)
    },
    text: {
        fontFamily: "'Jura', sans-serif",
        fontSize: "1rem",
        color: "#9e9e9e"
    },
}))

const PinkSwitch = withStyles({
    switchBase: {
        color: "#9e9e9e",
        '&$checked': {
            color: "#f50057",
        },
        '&$checked + $track': {
            backgroundColor: "#f50057"
        },
    },
    checked: {},
    track: {},
})(Switch);

export default function CustomizedSwitches() {
    const classes = useStyles()
    const toggleRef = useRef()

    const [state, setState] = React.useState({
        checked: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked })
    };

    return (
        <FormGroup className={classes.root}>
            <Typography component="div">
                <Typography className={classes.text}>Background Motion</Typography>
                <Grid className={classes.label} component="label" container alignContent="flex-end" alignItems="center" spacing={2} >
                    <Grid item className={classes.text}>ON</Grid>
                    <Grid item>
                        <PinkSwitch checked={state.checked} onChange={handleChange} name="checked" />
                    </Grid>
                    <Grid item className={classes.text}>OFF</Grid>
                </Grid>
            </Typography>
        </FormGroup>
    );
}