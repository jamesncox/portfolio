import React, { useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'
import MailIcon from '@material-ui/icons/Mail'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icons: {
        marginRight: theme.spacing(2),
        fontSize: "2.5rem",
        [theme.breakpoints.down('md')]: {
            fontSize: "2rem",
        }
    },
    text: {
        fontFamily: "'Jura', sans-serif",
        fontSize: "2rem",
        color: "#f50057",
        [theme.breakpoints.down('md')]: {
            fontSize: "1.5rem",
        }
    },
    closeButton: {
        position: "absolute",
        top: 8,
        right: "0",
        // fontSize: "3.2rem",
        color: "#9e9e9e",
        marginRight: theme.spacing(1),
    },
    closeIcon: {
        fontSize: "2.5rem"
    },
    openButton: {
        cursor: "pointer",
        position: "fixed",
        color: "#9e9e9e",
        zIndex: "1",
        top: 7,
        marginLeft: theme.spacing(1),
    },
    [theme.breakpoints.down('xs')]: {

    },
    openIcon: {
        fontSize: "2.5rem"
    }
}));

function SideNavBar(props) {
    const classes = useStyles()
    const navRef = useRef()

    function openNav() {
        navRef.current.style.width = "100%"
    }

    function closeNav() {
        navRef.current.style.width = "0%"
    }

    return (
        <div className={classes.root}>
            <div id="mySidenav" className="sidenav" ref={navRef}>
                <Button className={classes.closeButton} onClick={() => closeNav()}>
                    <CloseIcon className={classes.closeIcon} />
                </Button>
                <Grid container={true} direction="column" alignContent="center" alignItems="flex-start" item xs={12}>
                    <Button
                        className={classes.text}
                        onClick={() => closeNav()}
                        component={RouterLink}
                        to="/"
                    >
                        <HomeIcon className={classes.icons} />
                        Home
                    </Button>
                    <Button
                        className={classes.text}
                        onClick={() => closeNav()}
                        component={RouterLink}
                        to="/about"
                    >
                        <PersonIcon className={classes.icons} />
                        About
                    </Button>
                    <Button
                        className={classes.text}
                        onClick={() => closeNav()}
                        component={RouterLink}
                        to="/projects"
                    >
                        <WorkIcon className={classes.icons} />
                        Projects
                    </Button>
                    <Button
                        className={classes.text}
                        onClick={() => closeNav()}
                        component={RouterLink}
                        to="/education"
                    >
                        <SchoolIcon className={classes.icons} />
                        Education
                    </Button>
                    <Button
                        className={classes.text}
                        onClick={() => closeNav()}
                        component={RouterLink}
                        to="/contact"
                    >
                        <MailIcon className={classes.icons} />
                        Contact
                    </Button>
                </Grid>
            </div>
            <div>
                <Button className={classes.openButton} onClick={() => openNav()}>
                    <MenuIcon className={classes.openIcon} />
                </Button>
            </div>
        </div>
    )
}

export default SideNavBar