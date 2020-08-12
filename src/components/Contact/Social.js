import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'

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
        [theme.breakpoints.down('xs')]: {
            fontSize: ".7rem"
        },
    },
    card: {
        alignSelf: "center",
        margin: theme.spacing(2),
        maxWidth: 450,
        height: 125,
        [theme.breakpoints.down('sm')]: {
            height: 100
        },
    },
    github: {
        fontSize: "4rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "2.5rem"
        },
    },
    linkedIn: {
        fontSize: "4.5rem",
        color: "#0e76a8",
        [theme.breakpoints.down('sm')]: {
            fontSize: "3rem"
        },
    },
    twitter: {
        color: "#00acee",
        fontSize: "4.5rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "3rem"
        },
    }
}))

export default function Social() {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <CardContent className={classes.content}>
                        <IconButton className={classes.text}>
                            <Link
                                color="inherit"
                                underline="none"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/jamesnathanielcox/"
                                target="_blank"
                            >
                                <LinkedInIcon className={classes.linkedIn} />
                            </Link>
                        </IconButton>
                    </CardContent>
                </Grid>
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
                                <GitHubIcon className={classes.github} />
                            </Link>
                        </IconButton>
                    </CardContent>
                </Grid>
                <Grid item xs={4}>
                    <CardContent >
                        <IconButton className={classes.text}>
                            <Link
                                color="inherit"
                                underline="none"
                                rel="noopener noreferrer"
                                href="https://twitter.com/MemRook"
                                target="_blank"
                            >
                                <TwitterIcon className={classes.twitter} />
                            </Link>
                        </IconButton>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}