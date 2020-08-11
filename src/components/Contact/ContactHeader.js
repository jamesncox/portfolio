import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        alignSelf: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        fontFamily: "'Bungee Inline', cursive",
        color: "#f50057",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.75rem",
            marginTop: theme.spacing(1)
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.5rem",
            marginTop: theme.spacing(2)
        }
    },
}));

export default function ContactHeader(props) {
    const classes = useStyles();

    return (
        <Typography className={classes.title}>
            GET IN TOUCH!
        </Typography>
    )

}