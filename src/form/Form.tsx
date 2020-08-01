import React from 'react';
import S from './Form.module.css'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '320px',
                display: 'flex',
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
            formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
            },
        },
    }),
);

export default  function Form() {
    const classes = useStyles();
    const [category, setAge] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Заголовок" variant="outlined" classes={{root: S.formInput}}/>
            <TextField id="outlined-basic" label="Картинка" variant="outlined" />
            <FormControl variant="outlined" >
                <InputLabel id="demo-simple-select-outlined-label">Категория</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={category}
                    onChange={handleChange}
                    label="Категория"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'soup'}>Супы</MenuItem>
                    <MenuItem value={'meet'}>Мясо</MenuItem>
                    <MenuItem value={'chicken'}>Птица</MenuItem>
                    <MenuItem value={'fish'}>Рыба</MenuItem>
                </Select>
            </FormControl>
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
