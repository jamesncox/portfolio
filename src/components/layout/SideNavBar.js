import React, { useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
// import ToggleMotion from './ToggleMotion'

import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'
import MailIcon from '@material-ui/icons/Mail'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icons: {
        marginRight: theme.spacing(2),
        fontSize: "2rem",
        [theme.breakpoints.down('md')]: {
            fontSize: "1.5rem",
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
        top: "-1rem",
        right: "0",
        fontSize: "3rem",
        color: "#9e9e9e",
    },
    openButton: {
        fontSize: "30px",
        cursor: "pointer",
        // position: "fixed"
    }
}));

function SideNavBar(props) {
    const classes = useStyles()
    const navRef = useRef()
    // const [width, setWidth] = useState(window.innerWidth)
    // const smallBreakpoint = 600
    // const largeBreakPoint = 960

    // useEffect(() => {
    //     const handleWindowResize = () => setWidth(window.innerWidth)
    //     window.addEventListener("resize", handleWindowResize)

    //     return () => window.removeEventListener("resize", handleWindowResize)
    // }, [])

    function openNav() {
        navRef.current.style.width = "100%"

        // if (width <= smallBreakpoint) {
        //     navRef.current.style.width = "100%"
        // } else if (width > smallBreakpoint && width <= largeBreakPoint) {
        //     navRef.current.style.width = "33%"
        // } else {
        //     navRef.current.style.width = "25%"
        // }
    }

    function closeNav() {
        navRef.current.style.width = "0%"
    }

    return (
        <div className={classes.root}>
            <div id="mySidenav" className="sidenav" ref={navRef}>
                <Button className={classes.closeButton} onClick={() => closeNav()}>
                    &times;
                </Button>
                <Grid container={true} direction="column" alignContent="center" alignItems="flex-start" item xs={12}>
                    <Button
                        className={classes.text}
                        onClick={() => closeNav()}
                        component={RouterLink}
                        to="/"
                    >
                        <HomeIcon className={classes.icons} /> Home
                    </Button>
                    <Button
                        className={classes.text}
                        onClick={() => closeNav()}
                        component={RouterLink}
                        to="/about"
                    >
                        <PersonIcon className={classes.icons} /> About
                    </Button>
                    <Button
                        className={classes.text}
                        onClick={() => closeNav()}
                        component={RouterLink}
                        to="/projects"
                    >
                        <WorkIcon className={classes.icons} /> Projects
                    </Button>
                    <Button
                        className={classes.text}
                        onClick={() => closeNav()}
                        component={RouterLink}
                        to="/education"
                    >
                        <SchoolIcon className={classes.icons} /> Education
                    </Button>
                    <Button
                        className={classes.text}
                        onClick={() => closeNav()}
                        component={RouterLink}
                        to="/contact"
                    >
                        <MailIcon className={classes.icons} /> Contact
                    </Button>
                    {/* <ToggleMotion /> */}
                </Grid>
            </div>
            <div>
                <Button className={classes.openButton} onClick={() => openNav()}>&#9776; </Button>
            </div>
        </div>
    )
}

export default SideNavBar