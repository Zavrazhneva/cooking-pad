import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Ingredients from "../ingredients/Ingredients";
import Form from "../form/Form";
import S from "./Card.module.css"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 320,
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
        }
    }),
);


export default function RecipeReviewCard(props:any) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [editing, setEditing] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleEditingClick = () => {
        setEditing(!editing);
    };

    if (editing) {
        return (
            <div>
                test Test
            </div>
        )
    }

    return (
        <Card className={classes.root} classes={{ root: S.card}} >
            <div className={S.headerCard}>
                <Typography variant="h4" component="h4">{props.title}</Typography>
                <Fab color="secondary" aria-label="edit" >
                    <EditIcon onClick={handleEditingClick}/>
                </Fab>
            </div>

            <CardMedia
                className={classes.media}
                image= {props.images}
                title="Paella dish"
            />
            <CardContent classes={{ root: S.cardContentColor  }}>
                <Ingredients ingredients={props.ingredients}/>
            </CardContent>
            <CardActions disableSpacing>
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
                    <Typography paragraph>Приготовление:</Typography>
                    <Typography paragraph>{props.description}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
