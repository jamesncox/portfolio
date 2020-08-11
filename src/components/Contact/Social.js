import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    box: {
        alignSelf: "center",
        marginTop: theme.spacing(2),
        maxWidth: "100%",
        height: "auto",
    },
    text: {
        textAlign: "center",
        fontFamily: "'Jura', sans-serif",
        color: "#212121",
        fontSize: "1rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: ".8rem"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: ".7rem"
        },
    },
    card: {
        alignSelf: "center",
        margin: theme.spacing(2),
        maxWidth: 450,
        backgroundColor: "#eeeeee",
    },
    icon: {
        fontSize: "3rem"
    }
}))

export default function Social() {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <CardContent >
                        <IconButton className={classes.text}>
                            <Link
                                color="inherit"
                                underline="none"
                                rel="noopener noreferrer"
                                href="https://github.com/jamesncox"
                                target="_blank"
                            >
                                <GitHubIcon className={classes.icon} />
                            </Link>
                        </IconButton>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}