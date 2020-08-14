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
    openIcon: {
        fontSize: "2.5rem"
    }
}))

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
        <>
            <Button className={classes.openButton} onClick={() => openNav()}>
                <MenuIcon className={classes.openIcon} />
            </Button>

            <div id="mySidenav" className="sidenav" ref={navRef}>
                <Button className={classes.closeButton} onClick={() => closeNav()}>
                    <CloseIcon className={classes.closeIcon} />
                </Button>
                <Grid container={true} alignContent="center" direction="column" alignItems="flex-start">
                    <Grid item xs={12}>
                        <Button
                            className={classes.text}
                            onClick={() => closeNav()}
                            component={RouterLink}
                            to="/"
                        >
                            <HomeIcon className={classes.icons} />
                            Home
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            className={classes.text}
                            onClick={() => closeNav()}
                            component={RouterLink}
                            to="/about"
                        >
                            <PersonIcon className={classes.icons} />
                            About
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            className={classes.text}
                            onClick={() => closeNav()}
                            component={RouterLink}
                            to="/projects"
                        >
                            <WorkIcon className={classes.icons} />
                            Projects
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            className={classes.text}
                            onClick={() => closeNav()}
                            component={RouterLink}
                            to="/education"
                        >
                            <SchoolIcon className={classes.icons} />
                            Education
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
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
                </Grid>
            </div>
        </>
    )
}

export default SideNavBar