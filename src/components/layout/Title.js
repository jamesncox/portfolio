import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        alignSelf: "center",
        fontSize: "3rem",
        fontWeight: "bold",
        fontFamily: "'Codystar', cursive",
        marginTop: "-4rem",
        color: "#f50057",
        [theme.breakpoints.down('sm')]: {
            fontSize: "2.5rem",
            marginTop: "-3.75rem"
        }
    },
}));

export default function Title(props) {
    const classes = useStyles();

    return (
        <Typography className={classes.title}>
            JAMES COX
        </Typography>
    )

}