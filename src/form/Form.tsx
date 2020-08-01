import React from 'react';
import S from './Form.module.css'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '320px',
                display: 'flex',
            },
        },
    }),
);

export default  function Form() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Заголовок" variant="outlined" classes={{root: S.formInput}}/>
            <TextField id="outlined-basic" label="Картинка" variant="outlined" />
            <TextField
                id="outlined-multiline-static"
                label="Ингредиенты"
                multiline
                rows={4}
                variant="outlined"
                classes={{root: S.formInput}}
            />
            <TextField
                id="outlined-multiline-static"
                label="Описание рецепта"
                multiline
                rows={4}
                variant="outlined"
                classes={{root: S.formInput}}
            />
            <Button variant="contained" color="primary">
                Primary
            </Button>
        </form>
    );
}
