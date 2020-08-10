import React, { useRef, useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        textAlign: "flex-start",
    },
    text: {
        marginLeft: theme.spacing(4),
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
        // "&:hover": {
        //     color: "#f50057"
        // }
    },
    openButton: {
        fontSize: "30px",
        cursor: "pointer",
        // "&:hover": {
        //     color: "#f50057"
        // }
    }
}));

function SideNavBar(props) {
    const classes = useStyles()
    const navRef = useRef()
    const [width, setWidth] = useState(window.innerWidth)
    const smallBreakpoint = 600
    const largeBreakPoint = 960

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)

        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])

    function openNav() {
        if (width <= smallBreakpoint) {
            navRef.current.style.width = "100%"
        } else if (width > smallBreakpoint && width <= largeBreakPoint) {
            navRef.current.style.width = "33%"
        } else {
            navRef.current.style.width = "25%"
        }
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
                <Grid container={true} direction="column" alignItems="flex-start" item xs={12}>
                    <Button className={classes.text} onClick={() => closeNav()}>Home</Button>
                    <Button className={classes.text} onClick={() => closeNav()}>About</Button>
                    <Button className={classes.text} onClick={() => closeNav()}>Projects</Button>
                    <Button className={classes.text} onClick={() => closeNav()}>Education</Button>
                    <Button className={classes.text} onClick={() => closeNav()}>Contact</Button>
                </Grid>
            </div>
            <div>
                <Button className={classes.openButton} onClick={() => openNav()}>&#9776; </Button>
            </div>
        </div>
    )
}

export default SideNavBar