import React, { useState } from 'react'
import ProjectData from '../../data/projects.json'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 600,
        alignSelf: "center",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        '&:last-child': {
            marginBottom: theme.spacing(20)
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: "92%",
        },
    },
    media: {
        height: 0,
        paddingTop: '60.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    link: {
        marginRight: theme.spacing(1),
        marginBottom: "-.7rem",
        color: "#616161",
        fontSize: "1rem"
    },
    linkText: {
        marginBottom: "-.4rem",
        color: "#616161",
    },
    technologies: {
        marginTop: theme.spacing(2),
        fontFamily: "'Varta', sans-serif",
    },
    header: {
        fontFamily: "'Varta', sans-serif",
        fontWeight: "bold",
        fontSize: "1.4rem",
        marginBottom: "-1.7rem",
        color: "#212121",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.2rem"
        },
    },
    subheader: {
        fontFamily: "'Varta', sans-serif",
        [theme.breakpoints.down('xs')]: {
            fontSize: ".9rem"
        },
    },
    text: {
        fontSize: ".9rem",
        [theme.breakpoints.down('xs')]: {
            fontSize: ".7rem"
        },
    },
    icon: {
        [theme.breakpoints.down('xs')]: {
            fontSize: "1rem"
        },
    }
}));

export default function ProjectCards() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(true);
    const img = require.context('../../assets/images/', true)

    const handleExpandClick = (id) => {
        setExpanded(expanded === id ? false : id);
    }

    return (
        ProjectData.map(project => {
            return (
                <Card className={classes.root} key={project.id}>
                    <CardHeader
                        // titleTypographyProps={classes.header}
                        disableTypography={true}
                        className={classes.header}
                        title={project.name}
                    // subheader={project.summary}
                    />
                    <CardHeader
                        // titleTypographyProps={classes.header}
                        disableTypography={true}
                        className={classes.subheader}
                        subheader={project.summary}
                    />
                    <CardMedia
                        className={classes.media}
                        image={img(`./${project.image}`)}
                        title={project.name}
                    />
                    <CardActions disableSpacing>
                        <Button>
                            <Link
                                className={classes.link}
                                color="inherit"
                                underline="none"
                                rel="noopener noreferrer"
                                href={project.github}
                                target="_blank"
                            >
                                <GitHubIcon className={classes.icon} />
                            </Link>
                            <Link
                                className={classes.linkText}
                                color="inherit"
                                underline="none"
                                rel="noopener noreferrer"
                                href={project.github}
                                target="_blank"
                            >
                                <Typography className={classes.text}>Github</Typography>
                            </Link>
                        </Button>
                        <Button>
                            <Link
                                className={classes.link}
                                color="inherit"
                                underline="none"
                                rel="noopener noreferrer"
                                href={project.url}
                                target="_blank"
                            >
                                <DesktopWindowsIcon className={classes.icon} />
                            </Link>
                            <Link
                                className={classes.linkText}
                                color="inherit"
                                underline="none"
                                rel="noopener noreferrer"
                                href={project.url}
                                target="_blank"
                            >
                                <Typography className={classes.text}>Live Site</Typography>
                            </Link>
                        </Button>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded === project.id,
                            })}
                            onClick={() => handleExpandClick(project.id)}
                            aria-expanded={expanded === project.id}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded === project.id} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography className={classes.subheader} color="textSecondary" component="p">
                                {project.description}
                            </Typography>
                            <Typography className={classes.technologies}>
                                {project.technologies.join(', ')}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            )
        })
    );
}