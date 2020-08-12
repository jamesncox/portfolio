import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles((theme) => ({
    text: {
        fontFamily: "'Varta', sans-serif",
        color: "#212121",
        fontSize: "1.1rem",
        [theme.breakpoints.down('xs')]: {
            fontSize: ".9rem"
        },
    },
    card: {
        alignSelf: "center",
        margin: theme.spacing(2),
        maxWidth: 800,
    },
    large: {
        marginTop: theme.spacing(2),
        width: theme.spacing(12),
        height: theme.spacing(12),
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(8),
            height: theme.spacing(8),
        },
    },
}));

export default function Resume() {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.text}>
                    Button to down resume
                    </Typography>
            </CardContent>
            <CardContent>
                <Typography className={classes.text}>
                    Link to gitconnected
                    </Typography>
            </CardContent>
        </Card>
    )
}