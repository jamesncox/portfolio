import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        alignSelf: "center",
        marginTop: theme.spacing(2)
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#212121",
        color: "#eeeeee"
    },
    header: {
        padding: '1em'
    },
    message: {
        width: "100%"
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
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Send me a message
                        </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={e => handleLogin(e)}
                    >
                        <TextField
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
                            required
                            // error={username === ""}
                            // helperText={username === "" ? 'Must provide name' : ' '}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            placeholder="Your Email"
                            name="Your Email"
                            label="Your Email"
                            type="email"
                            id="Your Email"
                            onChange={handleEmail}
                            value={email}
                            required
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
        </Grid>
    )
}