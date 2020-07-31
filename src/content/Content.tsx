import React from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import NavBar from '../navBar/NavBar';
import Card from '../card/Card';
import {Reciepts} from '../mock/Mock'
import S from './Content.module.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }),
);

export default function PermanentDrawerLeft() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <NavBar/>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar}/>
                <Divider/>
                <List>
                    {['Все рецепты', 'Горячее', 'Супы', 'Мясо', 'Птица', 'Рыба'].map((text, index) => (
                        <ListItem button key={text}>

                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <div className={S.cardWrapper}>{Reciepts.map((item, i) =>
                    <Card {...item} key={item.title+ i}/>
                )}</div>
            </main>
        </div>
    );
}