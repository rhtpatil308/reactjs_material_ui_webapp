import React from 'react';
import {
    Container,
    CssBaseline,
    Button,
    TextField,
    Grid,
    Typography,
    Link,
    Box
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      borderRadius: 3,
      padding: '30px 30px',
      border: 1,
      boxShadow: '0 1px 3px 1px rgba(231, 76, 60, .3)',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Login = () => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h6">Login</Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Username"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            size="small"
                            InputProps={{
                                startAdornment:
                                <PersonIcon />,
                                classes: {
                                        adornedStart: classes.adornedStart
                                        }
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            size="small"
                            InputProps={{
                                startAdornment:
                                <LockIcon />,
                                classes: {
                                    adornedStart: classes.adornedStart
                                    }
                            }}
                        />
                        <Box flexGrow={1} textAlign="right">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Login
                            </Button>
                        </Box>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs>
                                <Link href="/forget_password" variant="body2">Forgot password?</Link>
                            </Grid>
                        </Grid>
                    </form>
            </div>
        </Container>
    )
}

export default Login;