import React from 'react'
import ContactHeader from './ContactHeader'
import SocialHeader from './SocialHeader'
import Social from './Social'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        alignSelf: "center",
        marginTop: theme.spacing(2)
    },
    text: {
        fontFamily: "'Varta', sans-serif",
        margin: theme.spacing(2),
        color: "#212121"
    }
}))

export default function Contact() {
    const classes = useStyles()

    return (
        <>
            <ContactHeader />
            <Paper className={classes.paper}>
                <Typography className={classes.text}>
                    This is where I will put an email
                </Typography>
            </Paper>
            <SocialHeader />
            <Social />
        </>
    )
}