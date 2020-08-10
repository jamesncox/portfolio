import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import SideNavBar from './SideNavBar'
import Home from './Home'

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

export default function Main(props) {
    const classes = useStyles()

    return (
        <Router>
            <div className={classes.root}>
                <SideNavBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}