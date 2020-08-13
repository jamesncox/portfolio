import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(8),
        alignSelf: "center",
        fontSize: "3rem",
        fontWeight: "bold",
        fontFamily: "'Jura', sans-serif",
        color: "#f50057",
        [theme.breakpoints.down('sm')]: {
            fontSize: "2.5rem",
            // marginTop: theme.spacing(1)
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "2rem",
            // marginTop: theme.spacing(2)
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