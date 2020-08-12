import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles((theme) => ({
    box: {
        alignSelf: "center",
        marginTop: theme.spacing(2),
        maxWidth: "100%",
        height: "auto",
    },
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
        // backgroundColor: "#eeeeee"
    },
}));


export default function DesiredRole(props) {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.text}>
                    I am looking for front-end, back-end or full-stack positions featuring some or all of my current skills and related technologies.
                </Typography>
            </CardContent>
            <CardContent>
                <Typography className={classes.text}>
                    I have a restaurant management background, cultivating experience in problem-solving, team-leadership, multitasking, achieving results under intense pressure, customer service, conflict resolution, and communication with others.
                </Typography>
            </CardContent>
            <CardContent>
                <Typography className={classes.text}>
                    If you are looking for someone who genuinely loves programming, excels working together in a team, embraces learning new skills and pushes their self to grow every day, look no further!
                </Typography>
            </CardContent>
        </Card>
    )
}