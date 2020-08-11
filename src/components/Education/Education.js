import React from 'react'
import EducationHeader from './EducationHeader'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
    text: {
        fontFamily: "'Varta', sans-serif",
        color: "#212121",
        fontSize: "1.1rem",
        [theme.breakpoints.down('xs')]: {
            fontSize: ".8rem"
        },
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
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(8),
            height: theme.spacing(8),
        },
    },
}));

export default function Education() {
    const classes = useStyles()

    return (
        <>
            <EducationHeader />

            <Card className={classes.card}>
                {/* <CardContent>
                    <Avatar src={} alt="James at the San Diego Zoo" className={classes.large} />
                </CardContent> */}
                <CardContent>
                    <Typography className={classes.text}>
                        I am many things. A dad. A husband. A musician. An athlete. An artist. And now a developer.
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.text}>
                        Besides programming, my biggest passions in life are music and soccer. Coding combines everything I love about soccer and music: creativity, self-expression, team work, challenging yourself, and so much more.
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.text}>
                        Please enjoy viewing my projects and feel free to contact me anytime if you believe I would be a great fit for your team or if you have any questions. Thank you for visiting my website and have a wonderful day!
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.card}>
                {/* <CardContent>
                    <Avatar src={} alt="James at the San Diego Zoo" className={classes.large} />
                </CardContent> */}
                <CardContent>
                    <Typography className={classes.text}>
                        I am many things. A dad. A husband. A musician. An athlete. An artist. And now a developer.
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.text}>
                        Besides programming, my biggest passions in life are music and soccer. Coding combines everything I love about soccer and music: creativity, self-expression, team work, challenging yourself, and so much more.
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.text}>
                        Please enjoy viewing my projects and feel free to contact me anytime if you believe I would be a great fit for your team or if you have any questions. Thank you for visiting my website and have a wonderful day!
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}