import React, { useRef } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    text: {
        fontFamily: "'Jura', sans-serif",
        fontSize: "2rem",
        color: "#f50057"
    },
    closeButton: {
        position: "absolute",
        top: "-1rem",
        right: "0",
        fontSize: "3rem",
        color: "#9e9e9e",
        "&:hover": {
            color: "#f50057"
        }
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
                <Button className={classes.closeButton} onClick={() => closeNav()}>&times;</Button>
                <Grid item xs={12}>
                    <Button className={classes.text}>About</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.text}>Projects</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.text}>Work</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.text}>Education</Button>
                </Grid>
            </div>
            <div>
                <Button style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => openNav()}>&#9776; </Button>
            </div>
        </div>
    )
}

export default SideNavBar