import React from 'react'
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
import { red } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        paddingTop: '56.25%', // 16:9
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
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function ProjectCards() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const img = require.context('../../assets/images/', true)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                    {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {project.summary}
                </Typography>
            </CardContent> */}
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <LaptopMacIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
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