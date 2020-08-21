import React, { useEffect } from 'react';
import BlogData from '../../data/blogs.json'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        alignSelf: "center",
        margin: theme.spacing(2)
    },
    media: {
        height: 250,
        [theme.breakpoints.down('sm')]: {
            height: 140
        },
    },
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(6),
            height: theme.spacing(6),
        },
    },
    title: {
        fontFamily: "'Varta', sans-serif",
        fontSize: "1.5rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.3rem"
        },
    },
    summary: {
        fontSize: "1rem",
        fontFamily: "'Varta', sans-serif",
    }
}));

export default function BlogPosts() {
    const classes = useStyles()
    const img = require.context('../../assets/images/', true)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        BlogData.map(blog => {
            return (
                <Card className={classes.root} key={blog.id}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="blog type" src={img(`./${blog.logo}`)} className={classes.large} />
                        }
                    // title={blog.name}
                    // titleTypographyProps={{ variant: 'h6' }}
                    />
                    <Link
                        color="inherit"
                        underline="none"
                        rel="noopener noreferrer"
                        href={blog.url}
                        target="_blank"
                    >
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={img(`./${blog.image}`)}
                                title={blog.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                    {blog.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.summary}>
                                    {blog.summary}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card >
            )
        })
    )
}