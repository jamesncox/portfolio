import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    card: {
        alignSelf: "center",
        marginTop: theme.spacing(2),
        width: 250,
        // backgroundColor: ""
    },
    links: {
        fontFamily: "'Varta', sans-serif",
        color: "#212121",
        fontSize: "1.1rem",
        textAlign: "center",
        '&:hover': {
            color: "#f50057",
            fontWeight: "bold",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: ".9rem"
        },
    },
    button: {
        fontFamily: "'Varta', sans-serif",
        backgroundColor: "#bdbdbd",
        color: "#212121",
        fontWeight: "bold",
        '&:first-child': {
            marginTop: theme.spacing(1)
        },
        '&:hover': {
            backgroundColor: "#f50057",
            color: "#eeeeee",
        },
    }
}));

export default function Resume() {
    const classes = useStyles()

    return (
        <Card elevation={3} className={classes.card}>
            <CardContent>
                <Typography className={classes.links}>
                    <Button className={classes.button} variant="contained">
                        <Link
                            color="inherit"
                            underline="none"
                            rel="noopener noreferrer"
                            href="https://gitconnected.com/jamesncox"
                            target="_blank"
                        >
                            @JAMESNCOX
                    </Link>
                    </Button>
                </Typography>
            </CardContent>
            <CardContent>
                <Typography className={classes.links}>
                    <Button className={classes.button} variant="contained">
                        <Link
                            color="inherit"
                            underline="none"
                            rel="noopener noreferrer"
                            href="https://gitconnected.com/jamesncox/resume"
                            target="_blank"
                        >
                            RESUME
                    </Link>
                    </Button>
                </Typography>
            </CardContent>
        </Card>
    )
}