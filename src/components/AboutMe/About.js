import React from 'react'
import JamesSanDiego from '../../assets/images/james san diego.jpg'
import Header from './Header'
import SlowDiagonals from './SlowDiagonals'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    box: {
        alignSelf: "center",
        marginTop: theme.spacing(2),
        maxWidth: "100%",
        height: "auto",
    },
    image: {
        height: 350,
        border: "solid 10px #212121",
        borderRadius: ".3rem",
        [theme.breakpoints.down('sm')]: {
            height: 300
        },
        [theme.breakpoints.down('xs')]: {
            height: 250
        }
    },
    text: {
        // marginTop: theme.spacing(2),
        alignSelf: "center",
        textAlign: "center",
        fontFamily: "'Jura', sans-serif",
        color: "#212121",
        fontSize: "1rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.25rem"
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "1rem"
        },
    },
    card: {
        alignSelf: "center",
        margin: theme.spacing(2),
        maxWidth: 800,
        backgroundColor: "#eeeeee"
    }
}));


export default function About(props) {
    const classes = useStyles()
    return (
        <>
            <SlowDiagonals />
            <Header />
            <Box className={classes.box}>
                <img className={classes.image} src={JamesSanDiego} alt="Ellie and James" />
            </Box>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.text}>
                        Hi, I'm James and I am many things. A dad. A husband. A musician. An athlete. An artist. And now a developer.  Besides coding, my two biggest passions in life are music and soccer. Coding combines everything I love about soccer and music: creativity, self-expression, team work, challenging yourself, and so much more.

                        I have experience in Ruby on Rails and JavaScript based programming with a background in restaurant management, integrating skills in problem-solving, team-management, multitasking, achieving results under intense pressure, customer service, conflict resolution, and communication with others.

                        If you are looking for someone who genuinely loves programming, excels working together in a team, embraces learning new skills and pushes their self to grow every day, look no further!

                        Please enjoy viewing my projects and feel free to contact me anytime if you believe I would be a great fit for your team or if you have any questions. Thank you for visiting my website and have a wonderful day.
                </Typography>
                </CardContent>
            </Card>
        </>
    )
}