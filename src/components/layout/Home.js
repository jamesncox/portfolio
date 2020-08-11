import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import EllieAndJames from '../../assets/images/ellie and james.jpg'
import Title from './Title'

const useStyles = makeStyles((theme) => ({
    box: {
        alignSelf: "center",
        marginTop: theme.spacing(2),
        height: "auto",
    },
    image: {
        height: 500,
        border: "solid 10px #212121",
        borderRadius: "1.5rem",
        [theme.breakpoints.down('sm')]: {
            height: 450
        },
        [theme.breakpoints.down('xs')]: {
            height: 350
        }
    },
    text: {
        marginTop: theme.spacing(2),
        alignSelf: "center",
        textAlign: "center",
        fontFamily: "'Jura', sans-serif",
        fontWeight: "bold",
        color: "#f50057",
        fontSize: "1.4rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.25rem"
        },
        // [theme.breakpoints.down('xs')]: {
        //     fontSize: "1rem"
        // },
    },
    subtext: {
        alignSelf: "center",
        textAlign: "center",
        fontFamily: "'Jura', sans-serif",
        color: "#212121",
        fontSize: "1.1rem",
        // [theme.breakpoints.down('xs')]: {
        //     fontSize: ".9rem"
        // },
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
            <Box className={classes.box}>
                <img className={classes.image} src={EllieAndJames} alt="Ellie and James" />
            </Box>
            <Typography className={classes.text}>
                Hi. I MAKE WEBSITES
            </Typography>
            <Typography className={classes.subtext}>
                I WOULD LOVE TO WORK WITH YOU!
            </Typography>
        </>
    )
}