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
        // backgroundColor: "#eeeeee"
    },
    header: {
        fontFamily: "'Varta', sans-serif",
        color: "#212121",
        fontSize: "1.1rem",
        fontWeight: "bold"
    },
    text: {
        fontFamily: "'Varta', sans-serif",
        color: "#212121",
        fontSize: "1.1rem",
    },
}));

export default function ThankYouMessage() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
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
                            Thank you for reaching out to me. I look forward to connecting with you and I will respond as soon possible!
                        </Typography>
                    </CardContent>
                </Card>
            </Backdrop>
        </div>
    );
}