import React, { useState } from 'react';

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
        backgroundColor: "#212121",
        color: "#eeeeee",
        fontFamily: "'Jura', sans-serif",
    },
    header: {
        fontFamily: "'Jura', sans-serif",
        fontSize: "1.5rem",
        color: "#212121",
    },
    message: {
        width: "100%"
    },
    formText: {
        fontFamily: "'Varta', sans-serif",
        color: "white"
    }
}));

export default function EmailForm(props) {
    const classes = useStyles();

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleLogin = e => {
        e.preventDefault()

        setUsername('')
        setEmail('')
        setMessage('')
    }

    return (
        <Box className={classes.root}>
            <Grid item xs={12} sm={12} md={5} component={Paper} elevation={3} square>
                <div className={classes.paper}>
                    <Typography className={classes.header}>
                        Send me a message
                        </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={e => handleLogin(e)}
                    >
                        <TextField
                            className={classes.formText}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            placeholder="Your Name"
                            id="Your Name"
                            label="Your Name"
                            name="Your Name"
                            onChange={handleUsername}
                            value={username}
                            size="small"
                        // error={username === ""}
                        // helperText={username === "" ? 'Must provide name' : ' '}
                        // autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            placeholder="Your Email"
                            name="Your Email"
                            label="Your Email"
                            type="email"
                            id="Your Email"
                            onChange={handleEmail}
                            value={email}
                            required
                            size="small"
                        />
                        <TextField
                            placeholder="Your message"
                            multiline
                            rows={10}
                            margin="normal"
                            variant="outlined"
                            name="Your Message"
                            label="Your Message"
                            type="text"
                            id="YourMessage"
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
    )
}