import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import EllieAndJames from '../../assets/images/ellie and james.jpg'

const useStyles = makeStyles((theme) => ({
    box: {
        alignSelf: "center",
        marginTop: theme.spacing(4),
        maxWidth: "100%",
        height: "auto",
        // clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)"
    },
    image: {
        height: 500,
        borderRadius: ".2rem",
        // transform: "skewY(5deg)",
        [theme.breakpoints.down('sm')]: {
            height: 450
        },
        [theme.breakpoints.down('xs')]: {
            height: 400
        }
    },
    text: {
        alignSelf: "center",
        textAlign: "center",
        fontFamily: "'Jura', sans-serif",
        color: "#f50057",
        fontSize: "1.5rem",
        padding: ".25rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.25rem"
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "1rem"
        },
    }
}));


export default function Welcome(props) {
    const classes = useStyles()
    return (
        <Box className={classes.box}>
            <Typography className={classes.text}>
                Hi. I'm James and I make things.
            </Typography>
            <img className={classes.image} src={EllieAndJames} alt="Ellie and James" />
        </Box>
    )
}