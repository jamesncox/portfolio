import React from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import EllieAndJames from '../../assets/images/ellie and james.jpg'
import Title from './Title'

const useStyles = makeStyles((theme) => ({
    paper: {
        alignSelf: "center",
        marginTop: theme.spacing(2),
        height: "auto",
        padding: theme.spacing(1.5),
        backgroundColor: "#212121",
        minWidth: 360,
        [theme.breakpoints.down('sm')]: {
            minWidth: 300,
            padding: theme.spacing(1.25),
        },
        [theme.breakpoints.down('xs')]: {
            minWidth: 200,
            padding: theme.spacing(1),
        }
    },
    image: {
        height: 500,
        borderRadius: "1.5rem",
        [theme.breakpoints.down('sm')]: {
            height: 450,
        },
        [theme.breakpoints.down('xs')]: {
            height: 350,
        }
    },
    text: {
        marginTop: theme.spacing(1),
        alignSelf: "center",
        textAlign: "center",
        fontFamily: "'Jura', sans-serif",
        fontWeight: "bold",
        color: "#f50057",
        fontSize: "1.4rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.25rem",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.1rem"
        },
    },
    subtext: {
        alignSelf: "center",
        textAlign: "center",
        fontFamily: "'Jura', sans-serif",
        color: "#212121",
        fontSize: "1.1rem",
        [theme.breakpoints.down('xs')]: {
            fontSize: ".9rem"
        },
    }
}));


export default function Home(props) {
    const classes = useStyles()
    return (
        <>
            <Title />
            <Typography className={classes.subtext}>
                FULLSTACK ENGINEER
            </Typography>
            <Typography className={classes.subtext}>
                CODING IN AUSTIN, TEXAS
            </Typography>
            <Typography className={classes.subtext}>
                3 YEARS DEVELOPMENT EXPERIENCE
            </Typography>
            <Paper className={classes.paper}>
                <img className={classes.image} src={EllieAndJames} alt="Ellie and James" />
            </Paper>
            <Typography className={classes.text}>
                Hi. I MAKE WEBSITES
            </Typography>
            <Typography className={classes.subtext}>
                I WOULD LOVE TO WORK WITH YOU!
            </Typography>
        </>
    )
}