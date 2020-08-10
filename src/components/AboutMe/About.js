import React from 'react'
import JamesSanDiego from '../../assets/images/james san diego.jpg'
import Header from './Header'
import SlowDiagonals from '../layout/SlowDiagonals'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
    box: {
        alignSelf: "center",
        marginTop: theme.spacing(2),
        maxWidth: "100%",
        height: "auto",
    },
    text: {
        // textAlign: "center",
        fontFamily: "'Jura', sans-serif",
        color: "#212121",
        fontSize: "1.1rem",
    },
    card: {
        alignSelf: "center",
        margin: theme.spacing(2),
        maxWidth: 800,
        backgroundColor: "#eeeeee"
    },
    large: {
        marginTop: theme.spacing(2),
        width: theme.spacing(12),
        height: theme.spacing(12),
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(8),
            height: theme.spacing(8),
        },
    },
}));


export default function About(props) {
    const classes = useStyles()
    return (
        <>
            <SlowDiagonals />
            <Header />
            <Card className={classes.card}>
                <CardContent>
                    <Avatar src={JamesSanDiego} alt="James at the San Diego Zoo" className={classes.large} />
                </CardContent>
                <CardContent>
                    <Typography className={classes.text}>
                        I am many things. A dad. A husband. A musician. An athlete. An artist. And now a developer.
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.text}>
                        I am looking for front-end, back-end or full-stack positions featuring some or all of the following: React, Redux, JavaScript, Ruby on Rails, CSS, HTML, Github, PostgreSQL, Material UI and any related technologies.
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.text}>
                        Besides coding, my two biggest passions in life are music and soccer. Coding combines everything I love about soccer and music: creativity, self-expression, team work, challenging yourself, and so much more.
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.text}>
                        I have experience in Ruby on Rails and JavaScript based programming with a background in restaurant management, integrating skills in problem-solving, team-management, multitasking, achieving results under intense pressure, customer service, conflict resolution, and communication with others.
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.text}>
                        If you are looking for someone who genuinely loves programming, excels working together in a team, embraces learning new skills and pushes their self to grow every day, look no further!
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.text}>
                        Please enjoy viewing my projects and feel free to contact me anytime if you believe I would be a great fit for your team or if you have any questions. Thank you for visiting my website and have a wonderful day.
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}