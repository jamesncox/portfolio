import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(10),
        alignSelf: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        fontFamily: "'Jura', sans-serif",
        color: "#f50057",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.75rem",
        },
    },
}));

export default function Header(props) {
    const classes = useStyles();

    return (
        <Typography className={classes.title}>
            ABOUT JAMES
        </Typography>
    )

}