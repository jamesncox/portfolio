import React, { useState, useEffect } from 'react';
import ThankYouMessage from './ThankYouMessage'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2)
    },
    paper: {
        borderRadius: 100,
        margin: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(2)
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.down('sm')]: {
            marginTop: "-2em"
        }
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        fontFamily: "'Varta', sans-serif",
        backgroundColor: "#bdbdbd",
        color: "#212121",
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: "#00c2b8",
            color: "#eeeeee",
        },
    },
    header: {
        fontFamily: "'Jura', sans-serif",
        fontSize: "1.5rem",
        color: "#212121",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.25rem"
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.15rem"
        },
    },
    message: {
        width: "100%"
    },
}))

export default function EmailForm(props) {
    const classes = useStyles();

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleUsername = (e) => {
        setUsername(e.target.value)
        setOpen(false)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setOpen(true)
        setUsername('')
        setEmail('')
        setMessage('')
    }

    return (
        <>
            {open === true ? <ThankYouMessage /> : null}
            <Box className={classes.root}>
                <Grid item xs={12} sm={12} md={5} component={Paper} elevation={3} >
                    <div className={classes.paper}>
                        <Typography className={classes.header}>
                            Send me a message
                        </Typography>
                        <form
                            className={classes.form}
                            onSubmit={e => handleSubmit(e)}
                            data-netlify="true"
                            name="contact"
                            method="post"
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <TextField
                                className={classes.formText}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="Name"
                                label="Name"
                                name="name"
                                type="text"
                                onChange={handleUsername}
                                value={username}
                                size="small"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="email"
                                label="Email"
                                type="email"
                                id="Email"
                                onChange={handleEmail}
                                value={email}
                                required
                                size="small"
                            />
                            <TextField
                                multiline
                                rows={10}
                                margin="normal"
                                variant="outlined"
                                name="message"
                                label="Message"
                                type="text"
                                id="Message"
                                className={classes.message}
                                onChange={handleMessage}
                                value={message}
                                required
                                size="small"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Box>
        </>
    )
}