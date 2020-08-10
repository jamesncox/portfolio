import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(2),
        alignSelf: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        fontFamily: "'Bungee Inline', cursive",
        color: "#f50057",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.75rem",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.5rem",
        }
    },
}));

export default function DesiredRoleHeader(props) {
    const classes = useStyles();

    return (
        <Typography className={classes.title}>
            DESIRED ROLE
        </Typography>
    )

}