import React from 'react'
import EducationHeader from './EducationHeader'
import FlatironSchool from '../../assets/images/flatironschool.png'
import UniversityOfMemphis from '../../assets/images/memphis-logo.jpg'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
    card: {
        alignSelf: "center",
        margin: theme.spacing(2),
        width: 800,
        backgroundColor: "#eeeeee",
        [theme.breakpoints.down('sm')]: {
            width: "92%"
        },
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
    text: {
        fontFamily: "'Varta', sans-serif",
        color: "#212121",
        fontSize: "1.1rem",
        [theme.breakpoints.down('xs')]: {
            fontSize: ".8rem"
        },
    },
    school: {
        fontFamily: "'Varta', sans-serif",
        fontWeight: "bold",
        color: "#212121",
        fontSize: "1.5rem",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1rem"
        },
    }
}));

export default function Education() {
    const classes = useStyles()

    return (
        <>
            <EducationHeader />

            <Card className={classes.card}>
                <CardContent>
                    <Avatar src={FlatironSchool} alt="Flatiron School Logo" className={classes.large} />
                </CardContent>
                <CardContent>
                    <Typography className={classes.school}>
                        Flatiron School
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.text}>
                        Bootcamp Certificate, Software Development ⋅ January 2019 - March 2020
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.text} >
                        A full stack Ruby on Rails and JavaScript web development program, featuring projects built with Ruby, Rails, Sinatra, JavaScript, React, HTML and CSS.
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.card}>
                <CardContent>
                    <Avatar src={UniversityOfMemphis} alt="University of Memphis" className={classes.large} />
                </CardContent>
                <CardContent>
                    <Typography className={classes.school}>
                        The University of Memphis
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.text}>
                        Bachelor's of Arts, English and Spanish ⋅ August 2004 to May 2008
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.text}>
                        English major with a concentration in creative writing and a Spanish minor.
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}