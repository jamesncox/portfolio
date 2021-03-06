import React from 'react'

import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "#212121d0",
    },
    card: {
        alignSelf: "center",
        margin: theme.spacing(2),
        maxWidth: 400,
    },
    header: {
        fontFamily: "'Varta', sans-serif",
        color: "#212121",
        fontSize: "1.1rem",
        fontWeight: "bold",
        marginBottom: "-1.5rem",
    },
    text: {
        fontFamily: "'Varta', sans-serif",
        color: "#212121",
        fontSize: "1.1rem",
    },
    subheader: {
        marginBottom: "-1.5rem",
        fontFamily: "'Varta', sans-serif",
        color: "#9e9e9e",
        fontSize: "1.1rem",
        fontWeight: "bold"
    },
    subtext: {
        fontFamily: "'Varta', sans-serif",
        color: "#9e9e9e",
        fontSize: "1rem",
    }
}));

export default function ThankYouMessage(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false)
        props.setOpen(false)
        props.setUsername("")
        props.setEmail("")
        props.setMessage("")
    };

    return (
        <div>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.header}>
                            MESSAGE SENT
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography className={classes.text}>
                            Thank you, {props.username}, for reaching out to me. I look forward to connecting with you and I will respond as soon possible!
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography className={classes.subheader}>
                            FROM YOU
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography className={classes.subtext}>
                            Name: {props.username}
                        </Typography>
                        <Typography className={classes.subtext}>
                            Email: {props.email}
                        </Typography>
                        <Typography className={classes.subtext}>
                            Message: {props.message}
                        </Typography>
                    </CardContent>
                </Card>
            </Backdrop>
        </div>
    );
}