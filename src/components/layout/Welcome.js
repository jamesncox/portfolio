import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import EllieAndJames from '../../assets/images/ellie and james.jpg'
import '../../Shapes.css'

const useStyles = makeStyles((theme) => ({
    box: {
        alignSelf: "center",
        marginTop: theme.spacing(4),
        maxWidth: "100%",
        height: "auto",
        // clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)"
    },
    image: {
        // marginTop: theme.spacing(2),
        height: 500,
        borderRadius: ".2rem",
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
            <img className={classes.image} src={EllieAndJames} alt="Ellie and James" />
            <Typography className={classes.text}>
                Hi. I'm James and I make things.
            </Typography>
            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </Box>
    )
}