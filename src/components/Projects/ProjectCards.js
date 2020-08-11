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
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 600,
        alignSelf: "center",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            maxWidth: "92%",
        },
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
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
        margin: theme.spacing(1),
        fontSize: 0
    },
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
                        title={project.name}
                        subheader={project.summary}
                    />
                    <CardMedia
                        className={classes.media}
                        image={img(`./${project.image}`)}
                        title={project.name}
                    />
                    <CardActions disableSpacing>
                        <IconButton aria-label="link to Github repository">
                            <Link
                                className={classes.link}
                                color="inherit"
                                underline="none"
                                rel="noopener noreferrer"
                                href={project.github}
                                target="_blank"
                            >
                                <GitHubIcon />
                            </Link>
                        </IconButton>
                        <IconButton aria-label="link to project website">
                            <Link
                                className={classes.link}
                                color="inherit"
                                underline="none"
                                rel="noopener noreferrer"
                                href={project.url}
                                target="_blank"
                            >
                                <LaptopMacIcon />
                            </Link>
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
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
                            <Typography variant="body2" color="textSecondary" component="p">
                                {project.description}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            )
        })
    );
}