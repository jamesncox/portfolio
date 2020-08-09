import React from 'react'
import Title from './Title'
import SideNavBar from './SideNavBar'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        fontFamily: "'Nanum Pen Script', cursive",
    },
}))

export default function Home(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <SideNavBar />
            <Title />
        </div>
    )
}