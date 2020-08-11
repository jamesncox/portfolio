import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import SideNavBar from './SideNavBar'
import Home from './Home'
import About from '../AboutMe/About'
import Projects from '../Projects/Projects'
import Education from '../Education/Education'
import Diagonals from './Diagonals'
import SlowDiagonals from './SlowDiagonals'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
    },
}))

export default function Main(props) {
    const classes = useStyles()

    return (
        <Router>
            <div className={classes.root}>
                <Diagonals />
                <SlowDiagonals />
                <SideNavBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/education">
                        <Education />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}