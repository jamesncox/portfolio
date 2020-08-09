import React, { useRef } from 'react'
import Button from '@material-ui/core/Button';

function SideNavBar(props) {
    const navRef = useRef()

    function openNav() {
        navRef.current.style.width = "100%"
    }

    function closeNav() {
        navRef.current.style.width = "0%"
    }

    return (
        <>
            <div id="mySidenav" className="sidenav" ref={navRef}>
                <Button style={{ color: "white" }} className="closebtn" onClick={() => closeNav()}>&times;</Button>
                <Button style={{ color: "white" }}>About</Button>
                <Button style={{ color: "white" }}>Projects</Button>
                <Button style={{ color: "white" }}>Work</Button>
                <Button style={{ color: "white" }}>Education</Button>
            </div>
            <div>
                <Button style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => openNav()}>&#9776; </Button>
            </div>
        </>
    )
}

export default SideNavBar