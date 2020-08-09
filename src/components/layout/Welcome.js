import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import EllieAndJames from '../../assets/images/ellie and james.jpg'

const useStyles = makeStyles((theme) => ({
    box: {
        alignSelf: "center",
        marginTop: theme.spacing(4),
        maxWidth: "100%",
        height: "auto",
    },
    image: {
        height: 500,
        borderRadius: ".5rem",
        transform: "skewY(-11deg)",
        [theme.breakpoints.down('sm')]: {
            height: 450
        },
        [theme.breakpoints.down('xs')]: {
            height: 400
        }
    }
}));


export default function Welcome(props) {
    const classes = useStyles()
    return (
        <Box className={classes.box} >
            <img className={classes.image} src={EllieAndJames} alt="Ellie and James" />
        </Box>
    )
}